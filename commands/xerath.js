module.exports = {
    name: 'xerath',
    description: 'magik',
    args: true,
    guildOnly: true,
    usage: '!xerath',
    execute(message, args) {
        switch(Math.floor(Math.random() * 4)){
            case 0:
              return message.reply(':zap: *Tu viens de te faire*  **foudroyé(e)** :zap: \n https://tenor.com/view/xerath-league-of-legends-ascended-arcane-power-power-gif-22903608');
            case 1:
              return message.reply('https://tenor.com/view/xerath-gif-21366295');
            case 2:
                return message.reply(':hourglass_flowing_sand: *Vous venez de permettre à* **Xerath** *d\'effectuer*  **l\'Ascension**, *il peut maintenant faire chuter* **Shurima** :smiling_imp:\nhttps://tenor.com/view/legends-of-runeterra-shurima-lol-geladeira-xerath-gif-23019075');
            default:
              return message.reply('Héhé get gud kid \nhttps://tenor.com/view/xerath-gif-21366187');
          }
    }
}
