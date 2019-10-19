const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("» Komut Grupları")
    .setTimestamp()
    .addField(":black_medium_small_square: Eğlence Komutları", "!!eğlence")
    .addField(":black_medium_small_square: Moderatör Komutları", "!!yetkili")
    .addField(":black_medium_small_square: Genel Komutlar", "!!genel")
    .addField(":black_medium_small_square: Ekstra Komutlar", "**YAKINDA**")
    .addField(":black_medium_small_square: Müzik Komutları", "!!müzik")
    .setFooter("© 2019 LastCooper", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
