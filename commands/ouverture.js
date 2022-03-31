module.exports = {
    name: 'open',
    description: 'open asso',
    args: true,
    guildOnly: true,
    usage: '!open',
    execute(message, args) {
      if(message.channel.id != 685119333655117892) return;
      if(message.member.id != 245608790068690946 &&
        message.member.id != 108693949845118976 &&
        message.member.id != 139788375405101056 &&
        message.member.id != 298863791955771392 &&
        message.member.id != 366228764838985728)
      	return message.reply('Tu n\'es pas admin, oust !');

        // Verify the user can user the bot
        if (!message.member.roles.cache.some(role => role.name === 'LOL'))
            return message.reply('Tu ne fais pas partie de l\'association LoL ! \n\n Envoies un message à <@366228764838985728>');
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
                const sql = "UPDATE admin SET ouverture='" + 1 + "'";

                con.query(sql, function (err, result) {
                	if (err) throw err;
                    return message.reply('Association ouverte ! :white_check_mark:');
                });
            });
        }
    }
};
