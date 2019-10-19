const Discord = require('discord.js');
const fs = require('fs');
let reklam = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:fire: Yeterli yetki, bulunmamakta!`);

    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`!!reklam-engelle aç - !!reklam-engelle kapat`)
    if(secenekler.length < 1) return message.channel.send(errembed);
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);
      if(secenekler.length < 1) return message.reply("Aktif hale getirmek için !!reklam-engelle aç & !!reklam-engelle kapat").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
        message.channel.send(`Reklam Engelleme filtresi, aktif hale getirildi!`).then(m => m.delete(5000));
        reklam[message.guild.id] = {
            reklam: "acik"
          };

          fs.writeFile("././jsonlar/reklamEngelle.json", JSON.stringify(reklam), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
        message.channel.send(`Reklam filtresi, deaktif hale getirildi!`).then(m => m.delete(5000));
        reklam[message.guild.id] = {
            reklam: "kapali"
          };

        fs.writeFile("././jsonlar/reklamEngelle.json", JSON.stringify(reklam), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['küfür-engel'],
        permLevel: 3
      };
      
      exports.help = {
        name: 'reklam-engelle',
        description: 'Reklam engelleme sistemini, açıp kapatmanızı sağlar.',
        usage: 'reklam-engelle <aç> veya <kapat>'
      };