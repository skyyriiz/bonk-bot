const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const bot = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
bot.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Bot has started.`);
  bot.user.setActivity("stack les sbires.");
});

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.channel.id != 758280822054191104 && message.channel.id != 891603491435450408) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName)
  || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  /*if (message.content.startsWith(`${prefix}`) && command) {
    message.react('___Nooooo___');
  }*/

  if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply('Je ne peux pas éxécuter cette commande en DM !');
  }

  // if (command.args && !args.length) {
  //   let reply = `Il me faut un nom, ${message.author}!`;
  //
  //   if (command.usage) {
  //     reply += `\n \n Réessaye comme ceci: \`${prefix}${command.name} ${command.usage}\``;
  //   }
  //
  //   return message.channel.send(reply);
  // }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (!timestamps.has(message.author.id)) {
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  } else {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`Attendez ${timeLeft.toFixed(1)} avant d'utiliser la commande \`${command.name}\` une nouvelle fois.`);
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  }
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('Une erreur est survenue.');
  }

});

bot.login(token);
