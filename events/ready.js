const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
    " Küfür Engel✨",
    " Reklam Engel⭐️",
    " !!müzik Güncel⭐️",
    " !!sunucu-kur Sistemi ⭐️",
    " !!komut-ekle Sistemi ⭐️",
    " !!yardım Güncel✨",
    "⭐️🔥By Nerloggz#7516🔥⭐️ ",
    "⭐️🔥By Batu4141#8284🔥⭐️ ",
    "⭐️🔥 Prefixim !! 🔥⭐️ "
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(
      oyun[random],
      "https://www.youtube.com/channel/UClV2RILVDsqW8wwT6bSWWpA"
    );
  }, 2 * 2500);

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif Edildi`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  client.user.setActivity(
    `${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Bot Başarı İle Ayarlandı`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
};
