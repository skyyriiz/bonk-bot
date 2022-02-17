module.exports = {
    name: 'bonk',
    description: 'shibaa',
    args: true,
    guildOnly: true,
    usage: '!bonk',
    execute(message, args) {
        switch(Math.floor(Math.random() * 8)){
            case 0:
              return message.reply('https://tenor.com/view/kasketi-bonk-yuumi-nasus-gif-21988440');
            case 1:
              return message.reply('https://tenor.com/view/nasus-space-groove-space-groove-nasus-league-of-legends-shiba-inu-gif-21542344');
            case 2:
                return message.reply('https://tenor.com/view/trick2g-thegatesareopen-leagueoflegends-nasus-udyr-gif-4708506');
            case 3:
                return message.reply('https://tenor.com/view/blitzcrank-nasus-lux-league-of-legends-lol-gif-17894036');
            case 4:
                return message.reply('Faites attention ! Le magnifique shiba de notre beau <@366228764838985728> rôde dans la jungle désormais !');
            case 5:
                return message.reply('Le saviez-vous qu\'il est impossible de fuir un Shiba dans la jungle ? :predator:');
            case 6:
                return message.reply('https://tenor.com/view/kendo-shinai-bonk-doge-horny-gif-20995284');
            case 7:
                return message.reply('https://tenor.com/view/bonkdog-bonk-dog-massive-merrell-twins-gif-23092384');
            default:
              return message.reply('https://tenor.com/view/nasus-space-groove-nasus-league-of-legends-shiba-inu-dancing-gif-21542368');
          }
    }
}
