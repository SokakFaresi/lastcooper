const Discord = require("discord.js");

let botid = ""; //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Youtube Kanallarımız`)

    .addField(
      `» Efe Yıldız`,
      `[Tıkla](https://www.youtube.com/channel/UCya1qUdD3JOo_0xUOkXONhw?view_as=subscriber)`
    )

    .addField(
      `» Batuhan Ediz`,
      `[Tıkla](https://www.youtube.com/channel/UClV2RILVDsqW8wwT6bSWWpA)`
    );
  message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ytkanal",
  description: "",
  usage: ""
};
