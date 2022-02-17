module.exports = {
    name: 'nunu',
    description: 'vroom',
    args: true,
    guildOnly: true,
    usage: '!nunu',
    execute(message, args) {
        switch(Math.floor(Math.random() * 4)){
            case 0:
              return message.reply('https://tenor.com/view/dwayrid-wide-nunu-lol-nunu-nunu-wide-nunu-runs-it-down-gif-18264852');
            case 1:
              return message.reply('https://tenor.com/view/league-of-legends-nunu-nunu-danse-nunu-quentin-quentin-gif-12499367');
            case 2:
                return message.reply('https://tenor.com/view/nunu-lol-gif-13826563');
            default:
              return message.reply('https://gfycat.com/testyclassicchickadee');
          }
    }
}
