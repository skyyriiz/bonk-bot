module.exports = {
    name: 'site',
    description: 'site web',
    args: true,
    guildOnly: true,
    usage: 'site',
    execute(message, args) {
      return message.reply('Tu veux accéder au site ? Tu as bien raison ! Il y a toutes les news dessus ! Pour accéder à notre super site : https://open.esgi.fr/associations/lol/');
    }
}
