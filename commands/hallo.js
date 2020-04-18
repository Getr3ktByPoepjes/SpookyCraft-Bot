const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hallo hoe gaat het?");
}

module.exports.help = {
    name: "hallo"
}
