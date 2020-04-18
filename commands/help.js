const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    return message.channel.send("**HelpLijst!** \n\n-staffteam - kijk naar het staffteam\n-report - report a player *Soon*\n-ticket - create a ticket *Soon*\n-close - close a ticket *Soon*\n\n **SpookyBot ©**");
}

module.exports.help = {
    name: "help"
}
