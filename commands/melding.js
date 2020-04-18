const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  // -melding Titel // bericht // kleur // kanaal

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Hier heb jij geen permissions voor!");

  var splitser = "//";

  if(args [0] == null){
    
      var useMessage = new discord.RichEmbed()
      .setTitle("Gebruik")
      .setColor("#ce1f1f")
      .setDescription(`-melding Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal`);

      return message.channel.send(useMessage);

    }

    args = args.join("").split(splitser);
   
    if(args[2] == undefined) args[2] = "#eeeeee";
    if(args[3] == undefined) args[2] = "general"

   var options = {

       titel: args[0] || "Melding",
       Bericht: args[1] || "Geen inhoud opgegeven",
       kleur: args [2].trim(),
       kanaal: args [3].trim()

    }

    var announcer = message.author

    var announcmentEmbed =  new discord.RichEmbed()
    .setTitle("Melding")
    .setColor("options.kleur")
    .setDescription(`Bericht van ${announcer} \n\n ${options.titel} \n\n ${options.bericht} \n`)
    .setTimestamp();

    var announcmentChannel = message.guild.channels.find(`name`, options.kanaal);
    if(!announcmentChannel) return message.channel.send("Kan het kanaal niet vinden")
    
    announcmentChannel.send(announcmentEmbed);

}

    module.exports.help = {
        name: "melding"
}