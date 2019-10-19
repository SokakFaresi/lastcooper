const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Genel Komutlar`)
    .addField('!!spotify','Etiketlediğin Birinin Spotify den ne dinlediğini görürsün')
    .addField('!!havadurumu ','hava durumunu atar')
    .addField('!!hastebin <YAZI> ','Yazdığın yazıyı hastebinden linkini atar')
    .addField('!!avatar ','Etikelediğin Kişinin Avatarını Atar')
    .addField('!!ailemiz  ','Ailemizi Atar')
    .addField('!!servericon  ','Sunucunun Profil Resmini Atar')
    .addField('!!ailemiz', 'Botumuzun Hangi Sunucularda Olduğunu Gösterir')
    .addField ('!!sunucubilgi', 'Discord Sunucusunun Bilgisini Atar')
    .addField ('!!istastik', 'Botun Bilgisini Atar')
    .addField ('!!seviye', 'Seviye Sistemi')
    
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
  name: 'genel',
  description: '',
  usage: ''
};
     