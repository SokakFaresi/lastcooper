const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Müzik Komutları`)
    .addField(' !!panel-kur ','Sunucuda Kaç Kişi Olduğunu Gösteren Bir Ses Kanalı Açar + Biri Katıldığında Değişir')//ne kadar müzik komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(' !!küfür-engel <aç-kapat> ','Küfür Korumasını Açar')
    .addField(' !!reklam-engel <aç-kapat> ','Reklam Korumasını Açar')
    .addField(' !!mute <@kullanıcı> <1sn/1dk/1sa/1g> ','Süreli Mute Atar')
    .addField(' !!reklam-taraması  ','Açıklamasında Yada İsminde Reklam Olanları Tarar')
    .addField('!!emoji-yükle  ','Discord Sunucusuna Emoji Ekler')
    .addField('!!yazı-kanal-aç [açmak istediğiniz kanalın adı]  ','Bir Yazı Kanalı Açar')
    .addField('!!ses-kanal-aç [açmak istediğiniz kanalın adı]  ','Bir Ses Kanalı Açar')
    .addField('!!yaz [yazdırmak istediğiniz şey]','Bota Yazı Yazdırır')
    .addField('!!slowmode <süre>','Yavaş Mod') 
    .addField('!!oylama <Yazı>', 'Oylama Yapmanızı Sağlar')
    .addField ('!!sunucu-kur', 'Hazır Sunucu Kurur')
    .addField ('!!sil <sayı>', 'Sohbeti Siler')
    .addField ('!!komut-ekle ', 'Kendinize Özel Komut Eklersiniz')
    .addField ('!!komut-sil', 'Kendinize Özel Yaptığınız Komutları Silersiniz')
    .addField ('!!komut-liste', 'Kenidize Özel Yaptığınız Komutları Gösterir')
   
    
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
  name: 'yetkili',
  description: '',
  usage: ''
};
     