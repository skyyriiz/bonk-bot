module.exports = {
    name: 'lol',
    description: 'Checks presence',
    args: true,
    guildOnly: true,
    usage: '!lol',
    execute(message, args) {
    i = 1
    if(i == 1)
	return message.reply('Il n\'est pas encore l\'heure ! L\'asso se déroule le jeudi entre 20h30 et 23h !');

// - Présence
//   - Récupérer le temps passé dans un channel vocal
//   - !lol

        // Keep id_discord
        var id_discord = message.member.id

        // Verify the user can user the bot
        if (!message.member.roles.cache.some(role => role.name === 'LOL'))
            return message.reply('Tu ne fais pas partie de l\'association LoL ! \n\n Envoies un message à <@366228764838985728>');
        else {
            const mysql = require('mysql');

            const con = mysql.createConnection({
                host: "localhost",
                user: "mike",
                password: "Petitsavio1",
                database: "lolusers2021"
            });

            const date = new Date().toISOString().replace(/T.+/, ' ').toString();
            console.log(date.length)
            console.log(date)
            var verifDate = 0;
            var newValue = 0;

            con.connect(function(err) {
                if (err) throw err;
                const sql = "SELECT nb_presences, last_date FROM user WHERE id_discord=\'" + id_discord + "'";

                con.query(sql, function (err, result) {
                	if (err) throw err;
			              if(result == "") return message.reply('Mais qui es-tu ? Es-tu sûr d\'être inscrit ?');

                    Object.keys(result).forEach(function(key){

                        var row = result[key];
                        verifDate = (row.last_date + " ").toString();
                        newValue = row.nb_presences + 1;

                        if(!(verifDate === date)){

                            const sql3 = "UPDATE user SET nb_presences='" + newValue + "', last_date='" + date + "' WHERE id_discord='" + id_discord + "'";
                            con.query(sql3, function (err, result) {
                                if (err) throw err;
                            });
                            if (message.member.id == 245608790068690946) return message.reply('Mon Roi ! :crown:');
                            if (message.member.id == 366228764838985728) return message.reply('Oh le Dieu des Shibas ! :shiba:');
                            if (message.member.id == 281837124724981760) return message.reply('Joyeux noël ! :sheep:');
                            if (message.member.id == 237239446506962944) return message.reply('Bienvenue maître Aozorra, ô grand roi des admins ! :crown:');
                            if (message.member.id == 263763301467422721) return message.reply('Oh pas toi encore ! :angry:');
                            if (message.member.id == 108693949845118976) return message.reply('Pain de mie Jacket ou pain de mie Pasquier ? :bread:');
                            if (message.member.id == 167168668940107776) return message.reply('Le bro de l\'infini ! :heart:');
                            if (message.member.id == 201013382931939330) return message.reply('Pense à acheter de la grenadine pour ton frère ! :sunflower:');
                            if (message.member.id == 298863791955771392) return message.reply('*J\'ai des haches, il ne me manque que des victimes.* :draven:');
                            if (message.member.id == 201013382931939330) return message.reply('*Ne mettez pas le yéti en colère. Vous n\'avez pas envie de voir le yéti en colère.* ! :nunu:');
                            if (message.member.id == 210758701110394881) return message.reply('Tu vas t\'acheter des petites légendes aujourd\'hui ? :stuck_out_tongue_winking_eye:');

                            return message.reply('Présence enregistrée ! Tu es à ' + newValue + ' présence(s)');
                        }
                        return message.reply('Présence déjà enregistrée ! Tu es à ' + row.nb_presences + ' présence(s)');
                    });
                });
            });
        }
    }
};
