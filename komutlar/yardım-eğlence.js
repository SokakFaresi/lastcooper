const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Müzik Komutları`)
    .addField('!!fb','Fener Bahçe Fotoğrafı Atar')
    .addField('!!bjk','Beşiktaş Fotoğrafı Atar')
    .addField('!!gs','Galata Saray Fotoğrafı Atar')
    .addField('!!duello <kullanıcı>', 'Etiketlediğin Kişi Kabul Ederse 1vs1 Atarsın')
    .addField('!!wasted <Kullanıcı>', 'Ölme Efekti Verir')
    .addField('!!yazı-tura', 'Yazı Tura Atar')
    .addField('!!yumruk-at ', 'Yumruk Atar')
    .addField('!!sevimlibakış ', 'Sevimli Bakar')
    .addField('!!öp ', 'İstediğin Kişiyi Öpresin')
    
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
  name: 'eğlence',
  description: '',
  usage: '',
};
     