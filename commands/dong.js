module.exports = {
    name: 'dong',
    description: 'ding dong',
    args: true,
    guildOnly: true,
    usage: 'dong',
    execute(message, args) {
      switch(Math.floor(Math.random() * 12)){
        case 0:
          return message.reply('Hmm... let me fix that.');
        case 1:
          return message.reply('Yes, yes, hurry, I have important work to get back to!');
        case 2:
          return message.reply('https://i.makeagif.com/media/10-24-2017/h6JSYw.mp4');
        case 3:
          return message.reply('https://i.makeagif.com/media/11-08-2015/ZJ1Xhr.mp4');
        case 4:
          return message.reply('https://giphy.com/gifs/3OuK8GcZHPGwRUrV86');
        case 5:
          return message.reply('https://pa1.narvii.com/5950/62d3ffde8676c5dd2dca5b688b207c9d5ceefff7_hq.gif');
        case 6:
          return message.reply('DIIIIIIIIIIIIIIIIIIINNNNNNNNNNG !');
        case 7:
          return message.reply('Aha, 42, I knew it! Now - er, what was the question again?');
        case 8:
          return message.reply('42... there\'s just something about that number.');
        case 9:
          return message.reply('By __**my**__ calculations...');
        case 10:
          return message.reply('https://gfycat.com/teeminglividfawn');
        default:
          return message.reply('Saviez-vous que le Roi des cerfs a plus de 700k points sur Heimerdinger ? Il fût un temps où il abusait du zz\'rot et de la bannière de commandement !');
      }
    }
}
