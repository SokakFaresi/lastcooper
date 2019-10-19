  const Discord = require('discord.js');

  exports.run = (client, message, args) => {
      let mesaj = args.slice(0).join(' ');
      if (!mesaj) return message.reply(':kiss: Kimi öpeceğini yazmalısın :kiss:');
      var giflistesi = ['https://media.discordapp.net/attachments/461953165873512449/461953304218566676/image.gif?width=375&height=202',
          'https://media.discordapp.net/attachments/461953165873512449/461953343074336779/image.gif?width=375&height=293',
          'https://media.discordapp.net/attachments/461953165873512449/461953403195490304/image.gif?width=375&height=211',
          'https://media.discordapp.net/attachments/461953165873512449/461953431893180456/image.gif?width=375&height=210',
          'https://media.discordapp.net/attachments/461953165873512449/461953470849613824/image.gif?width=375&height=183',
          'https://media.discordapp.net/attachments/461953165873512449/461953485877805056/image.gif?width=375&height=211',
          'https://media.discordapp.net/attachments/461953165873512449/461953533810573312/image.gif?width=183&height=225',
          'https://media.discordapp.net/attachments/461953165873512449/461953582195933185/image.gif?width=306&height=150',
          'https://media.discordapp.net/attachments/461953165873512449/461953585085677568/image.gif?width=375&height=173',
          'https://media.discordapp.net/attachments/461953165873512449/461953620183744512/image.gif?width=375&height=162',
          'https://media.discordapp.net/attachments/461953165873512449/461953635023192074/image.gif?width=375&height=199',
          'https://media.discordapp.net/attachments/461953165873512449/461953717273624577/image.gif?width=375&height=212',
          'https://media.discordapp.net/attachments/461953165873512449/461953762546679808/image.gif?width=375&height=189',
          'https://media.discordapp.net/attachments/461953165873512449/461953835666243584/image.gif?width=375&height=188',
          'https://media.discordapp.net/attachments/461953165873512449/461953862140559360/image.gif?width=394&height=188',
          'https://media.discordapp.net/attachments/461953165873512449/461953886811586561/image.gif?width=375&height=150',
          'https://media.discordapp.net/attachments/461953165873512449/461953953769455626/image.gif?width=375&height=210',
          'https://media.discordapp.net/attachments/461953165873512449/461953956537565204/image.gif?width=374&height=209',
          'https://media.discordapp.net/attachments/461953165873512449/461953982865342465/image.gif?width=338&height=338',
          'https://media.discordapp.net/attachments/461953165873512449/461953984530481163/image.gif?width=345&height=274',
          'https://cdn.discordapp.com/attachments/619948916938506240/624227953361944586/giphy.gif', 
          'https://cdn.discordapp.com/attachments/619948916938506240/624227954544738314/giphy_2.gif',
          'https://cdn.discordapp.com/attachments/619948916938506240/624228130311110666/giphy_4.gif',
          'https://cdn.discordapp.com/attachments/619948916938506240/624227994222723072/giphy_1.gif',
          'https://cdn.discordapp.com/attachments/619948916938506240/624227971477274654/giphy_3.gif',
          'https://tenor.com/view/hot-kiss-rachel-mc-adams-channing-tatum-the-vow-gif-5628024',
          'https://tenor.com/view/milk-and-mocha-bear-couple-kisses-kiss-love-gif-12498627',
          'https://tenor.com/view/love-neckkiss-gif-10033341',
          'https://tenor.com/view/pretty-little-liars-pll-muah-kiss-love-gif-4469403',              

      ]
      var gif = giflistesi[Math.floor(Math.random() * giflistesi.length)]
      const embed = new Discord.RichEmbed()
          .setAuthor('')
          .setColor(3447003)
          .setDescription(message.author.username + ' :kiss: Seni Öptü :kiss: !')
          .setImage(`${gif}`)
      return message.channel.send(embed);
  };

  exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["öp"],
      permLevel: 0
  };

  exports.help = {
      name: 'öp',
      descriptio : 'İstediğiniz Kişiyi öpersiniz.',
      usage: 'öp'
  };