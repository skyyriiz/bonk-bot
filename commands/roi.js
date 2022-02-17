module.exports = {
    name: 'roi',
    description: 'call roi',
    args: true,
    guildOnly: true,
    usage: '!Roi',
    execute(message, args) {
      return message.reply('Notre roi nous a quitté, nous éspérons le revoir très vite, tu as effectué un splendide travail lors de ton règne :cry:');
    }
}
