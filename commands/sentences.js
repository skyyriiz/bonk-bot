module.exports = {
    name: 'c',
    description: 'Talking',
    args: true,
    guildOnly: true,
    usage: 'c',
    execute(message, args) {

      switch(Math.floor(Math.random() * 16)){
        case 0:
          return message.reply('"*Certains combattent pour l\'honneur, d\'autres pour la gloire. Qu\'importe, du moment qu\'ils combattent.*" - **Aatrox**');
        case 1:
          return message.reply('"*Je suis la fureur du blizzard, la morsure du vent, le froid de la glace. Je suis Freljord.*" - **Anivia**');
        case 2:
          return message.reply('"*Ces lieux brûleront, pas en raison de cendres portées par le vent ou du souffle des braises, mais en raison de la vengeance que portent mes mains.*" - **Brand**');
        case 4:
          return message.reply('"*Son nom est Corki. Il est la mort venue d\'en haut.*" - **Corki**');
        case 5:
          return message.reply('"*Le soleil n\'offre aucune vérité. Sa lumière seulement nous brûle et nous aveugle*" - **Diana**');
        case 6:
          return message.reply('"*Le \'meilleur\' dépend de mes exigences du jour.*" - **Draven** :draven:');
        case 7:
          return message.reply('"*Pas le temps d\'étudier des grimoires moisis quand on explore la crypte où se trouvent ces grimoires moisis*" - **Ezreal**');
        case 8:
          return message.reply('"*Je suis venue en quête d\'une épreuve. Est-ce là tout ce que vous pouvez m\'offrir ?*" - **Fiora**');
        case 9:
          return message.reply('"*Ohé, abattez-moi cet homme. Ou tirez-lui dans le dos et volez-lui son butin, au moins.*" - **Gankplank**');
        case 10:
          return message.reply('"*Ne vous laissez pas endormir par la beauté de Janna. Derrière le masque de la brise se cache la brutalité de l\'ouragan.*" - **Janna**');
        case 11:
          return message.reply('"*Regarde, j\'ouvre ma boîte de compassion ! Oh, elle est vide !\'*" - **Jinx**');
        case 12:
          return message.reply('"*Tuer. Consommer. S\'adapter*" - **Kha\'Zix **');
        case 13:
          return message.reply('"*Fermez les yeux et laissez le froid vous emporter.*" - **Lissandra**');
        case 14:
          return message.reply('"*Je suis la marée, et je ne peux être détournée*" - **Nami**');
        default:
          return message.reply('"*Si tu veux counter un champion, pick **Roi des cerf**, c\'est trop fort !*" - **Roi des cerfs**');
      }
    }
}
