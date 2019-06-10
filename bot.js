const Discord  = require('discord.js');
const client     = new Discord.Client();
const prefix   = "-";

client.on("message", message => {
  if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
   ** :bookmark:  Help bc :bookmark: **
** ${prefix}bc / لــ ارسال برود كاسيت للكل
   ${prefix}obc / لــ ارسال برود كاسيت لللاون لاين فقط 
   ${prefix}rolebc / لــ ارسال برود كاست لرتبه معينه
   ${prefix}sand / لـ ارسال برود كاسيت لشخص معين
   ${prefix}bot / لمعرفه معلومات البوت
**
==============================================
** لتغير حلات البوت **
** 
   ${prefix}sp / لــ تغير حاله البوت الي بلنيق
   ${prefix}sw / لـ تغير حاله البوت الي واتشنق
   ${prefix}sl / لـ تغير حاله البوت الي لستينق
   ${prefix}ss / لتغير حاله البوت الي استريمنق
**
`)
   message.channel.sendEmbed(embed)
   
   }
   });

const developers = ["439020996171923466"]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'sp')) {//بلينق
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}:white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'sw')) {//واتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}:white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'sl')) {//لستينق
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult} :white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'ss')) {//استريمنق
    client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**Status You ${argresult}:white_check_mark:  **`)
}
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``bot info`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ - ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By |!LG ÐrĀčuĿĀ#6764')
    })
}
});

client.on("message", message => {  
              if (message.content.startsWith(prefix + "obc")) {    
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;   
    let args = message.content.split(" ").slice(1);  
    var argresult = args.join(' ');
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  
   m.send(`${argresult}\n ${m}`);   
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` :mailbox:  عدد المستلمين `);
   message.delete();
  };    
  });

client.on('message', message => {
                   if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'bc')) {
                if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
                if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
                let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                let BcList = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setAuthor(`محتوى الرساله ${args}`)
                .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
                if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
                msg.react('📝')
                .then(() => msg.react('✏'))
                .then(() =>msg.react('📝'))
                 
                let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
                let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
                 
                let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
                let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
                 
                EmbedBc.on("collect", r => {
                message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                var bc = new
                Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(`Message : ${args}`)
                .setAuthor(`Server : ${message.guild.name}`)
                .setFooter(`Sender : ${message.author.username}`)
                .setThumbnail(message.author.avatarURL)
                m.send({ embed: bc })
                msg.delete();
                })
                })
                NormalBc.on("collect", r => {
                  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                m.send(args);
                msg.delete();
                })
                })
                })
                }
                });


				client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + 
             "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`)
        }
    }); 

client.on("message", message => {
  if (message.content.startsWith(prefix + 'send')) {
    if(!message.author.id === "569502505289908245") return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(1).join(" ");
user.send(args);
  }});

client.login(process.env.BOT_TOKEN);
