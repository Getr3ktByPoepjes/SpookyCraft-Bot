const discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    return message.channel.send("**Staffteam SpookyCraft**\n\nHidde | Eigenaar\nLevi | Manager\nTimo | Project-Leider\nNick | Jr.Event-Manager\nThomas | Moderator\nMerlijn | Staff\nTjip | Staff");
}

module.exports.help = {
    name: "staffteam"
}
