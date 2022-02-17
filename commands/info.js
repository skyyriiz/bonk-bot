module.exports = {
    name: 'info',
    description: 'informate',
    args: true,
    guildOnly: true,
    usage: '!info',
    execute(message, args) {
      return message.reply(
'Il vous faudra bien respecter tout ce qui est demandé pour s\'inscrire :\n' +
'- nom de famille : en MAJUSCULE et / ou avec des - ou des espaces\n' +
'- prénom : qui commence avec une majuscule\n' +
'- mail : mettre votre mail tout simplement :man_shrugging:\n' +
'- classe :\n' +
'     - 1I : 1ère année initiale\n' +
'     - 1A : 1ème année alternance\n' +
'     - 2I : 2ème année initiale\n' +
'     - 2A : 2ème année alternance\n' +
'     - 3A : 3ème année alternance\n' +
'     - 4A : 4ème année alternance\n' +
'     - 5A : 5ème année alternance\n' +
'- pseudo : votre pseudo lol (il n\'aura pas d\'impact, c\'est juste pour moi)\n' +
'Il faut que vous séparez les informations à l\'aide d\'un **_**\n' +
'ex :' +
'``!inscription NOM_Prénom_monmail@gmail.com_4A_Roi Dessert``\n\n' +

'Pour les présences, il vous suffira de m\'appeler avec la commande ``!lol`` :donger:\n' +
'ex :\n' +
'``!lol``\n\n' +
'Tu veux voir le site de l\'association ? Je te dis tout avec ``!site``\n' +
'ex :\n'+
'``!site``\n\n' +
'Durant mes aventures, j\'ai rencontré beaucoup de personnes. Je peux peut-être me souvenir d\'eux si tu m\'aides avec ``!c``\n' +
'ex :\n'+
'``!c``\n\n' +
'Vous pouvez m\'appeler avec ``!dong``\n' +
'ex :\n'+
'``!dong``\n\n' +
'Il existe également des commandes cachées...\n' +
'Enjoy !');
    }
}
