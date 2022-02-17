module.exports = {
    name: 'bonus',
    description: 'bonus +1 présence',
    args: true,
    guildOnly: true,
    usage: '!bonus <id>',
    execute(message, args) {
        if (!args.length)
            return message.reply('Donne l\'id du vilan garnement !');
        var id_vilain = args[0]

        const mysql = require('mysql');

        const con = mysql.createConnection({
            host: "localhost",
            user: "mike",
            password: "Petitsavio1",
            database: "lolusers2021"
        });

        con.connect(function (err) {
            if (err) throw err;
            const sql = "SELECT nb_presences FROM user WHERE id_discord=\'" + id_vilain + "'";

            con.query(sql, function (err, result) {
                if (err) throw err;
                if (result == "") return message.reply('Mais qui es-tu ? Es-tu sûr d\'être inscrit ?');

                Object.keys(result).forEach(function (key) {

                    var row = result[key];
                    if (row.nb_presences === 0) {
                        return message.reply('Cette personne a déjà 0 points')
                    }

                    newValue = row.nb_presences + 1;

                    const sql3 = "UPDATE user SET nb_presences='" + newValue + "' WHERE id_discord='" + id_vilain + "'";
                    con.query(sql3, function (err, result) {
                        if (err) throw err;
                    });
                    return message.reply(`Cette personne a désormais ${newValue} points`);
                });
            });
        });
    }
}