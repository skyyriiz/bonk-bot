module.exports = {
  name: 'inscription',
  description: 'Inscriptateur',
  args: true,
  guildOnly: true,
  usage: '<Nom_Prénom_Mail_Classe_Pseudo>',
  execute(message, args) {

    // - Inscription
    //   - !inscription
    //   - Nom
    //     - Nom de famille en MAJUSCULE et / ou avec des - ou des espaces
    //   - Prénom
    //     - Prénom qui commence avec une majuscule
    //   - Mail
    //   - Classe
    //     - vérifier que la classe est du format de celles proposées
    //   - Pseudo
    //   - id.disord
    //
    // - Présence
    //   - Récupérer le temps passé dans un channel vocal
    //   - !lol pseudo

    // nom         : tabUser[0]
    // prénom      : tabUser[1]
    // mail        : tabUser[2]
    // classe      : tabUser[3]
    // pseudo      : tabUser[4]
    // id_discord  : tabUser[5]

    console.log(args.join(' '));

    var tabUser = args.join(' ').split('/')
    console.log(tabUser[0])
    name = tabUser[0].split('')
    first_name = tabUser[1].split('')
    mail = tabUser[2].split('')

    // If a value is empty
    if(tabUser[0] == '' || tabUser[1] == '' || tabUser[2] == '' || tabUser[3] == '' || tabUser[4] == '')
    return message.reply(`l'une des valeurs est vide...`)

    // Lastname too short
    if(tabUser[0].length < 2)
    return message.reply(`le nom de famille est trop court`)
    // Bad format for the lastname
    if(name[0] != name[0].toUpperCase())
    return message.reply(`le nom de famille n'a pas le bon format`)
    // Firstname too short
    if(tabUser[1].length < 2)
    return message.reply(`le prénom est trop court`)
    // Firstname bad format
    if(first_name[0] != first_name[0].toUpperCase())
    return message.reply(`le nom n'a pas le bon format`)
    // // If mail haven't @
    // var nb_a = 0
    // for(let i = 0; i != tabUser[0].length; i++){
    //   if(mail[i] == '@'){
    //     nb_a += 1
    //   }
    // }
    // if(nb_a != 1)
    // return message.reply(`est-tu sûr que c'est une adresse mail... ?`)
    // If class isn't a real class
    if(
      tabUser[3] != '1I' && tabUser[3] != '1A' &&
      tabUser[3] != '2I' && tabUser[3] != '2A' &&
      tabUser[3] != '3A' && tabUser[3] != '4A' &&
      tabUser[3] != '5A')
      return message.reply(`la classe que tu as entré n'est pas du bon format !`)

//      console.log(tabUser);

      tabUser.push(message.member.id)

//      console.log(tabUser);

      if (!message.member.roles.cache.some(role => role.name === 'LOL'))
      return message.reply('Tu ne fais pas partie de l\'association LoL ! \n\n Envoies un message à <@245608790068690946>');
      else {
        const mysql = require('mysql');

        const con = mysql.createConnection({
          host: "localhost",
          user: "mike",
          password: "#",
          database: "lolusers2021"
        });

        con.connect(function(err) {
          if (err) throw err;
          const sql = "SELECT id_discord FROM user"
          con.query(sql, function (err, result) {
            if (err){
              throw err;
              return message.reply('Tu es déjà inscrit... nan ?');
            }
          });
        });

        const sql3 = "INSERT INTO user (nom, prenom, mail, classe, pseudo, id_discord) VALUES (\""
        + tabUser[0] + "\", \""
        + tabUser[1] + "\", \""
        + tabUser[2] + "\", \""
        + tabUser[3] + "\", \""
        + tabUser[4] + "\", \""
        + tabUser[5] + "\")"
        con.query(sql3, function (err, result) {
          if (err) throw err;
          return message.reply('Tu es bien inscrit ! Bienvenue \:sunflower:');
        });
      }
    }
  };
