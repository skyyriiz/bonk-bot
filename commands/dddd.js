module.exports = {
    name: 'dddd',
    description: 'Talking',
    args: true,
    guildOnly: true,
    usage: 'dddd',
    execute(message, args) {

      switch(Math.floor(Math.random() * 3)){
        case 0:
          return message.reply('https://tenor.com/bmEPT.gif');
        case 1:
          return message.reply('https://gfycat.com/tensefairbluebreastedkookaburra');
        default:
          return message.reply('https://tenor.com/bozey.gif');
      }
    }
}
