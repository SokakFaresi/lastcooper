const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Müzik Komutları`)
    .addField('!!çal Şarkı İsmi','Bir Şarkı Çalar')//ne kadar müzik komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('!!durdur ','Şarkıyı Durdurur')
    .addField('!!devam ','Şarkıyı Devam Ettirir')
    .addField('!!sıra ','Bidaki Şarkıları Gösterir')
    .addField('!!ses  ','Şarkı Sesini Yükseltir')
    
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=629679202827763732&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/s6y9YZH) **|** [Yakında (Vote)](YAKINDA!!) **|** [Web Sitesi]()`
); //websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'müzik',
  description: '',
  usage: ''
};
     