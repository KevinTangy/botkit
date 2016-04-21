/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
          \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
           \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


This is a sample Slack bot built with Botkit.

This bot demonstrates many of the core features of Botkit:

* Connect to Slack using the real time API
* Receive messages based on "spoken" patterns
* Reply to messages
* Use the conversation system to ask questions
* Use the built in storage system to store and retrieve information
  for a user.

# RUN THE BOT:

  Get a Bot token from Slack:

    -> http://my.slack.com/services/new/bot

  Run your bot from the command line:

    token=<MY TOKEN> node bot.js

# USE THE BOT:

  Find your bot inside Slack to send it a direct message.

  Say: "Hello"

  The bot will reply "Hello!"

  Say: "who are you?"

  The bot will tell you its name, where it running, and for how long.

  Say: "Call me <nickname>"

  Tell the bot your nickname. Now you are friends.

  Say: "who am I?"

  The bot will tell you your nickname, if it knows one for you.

  Say: "shutdown"

  The bot will ask if you are sure, and then shut itself down.

  Make sure to invite your bot into other channels using /invite @<my bot>!

# EXTEND THE BOT:

  Botkit is has many features for building cool and useful bots!

  Read all about it here:

    -> http://howdy.ai/botkit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


controller.hears('(^(b|B)ueller[?]$)','ambient',function(bot, message) {
    bot.reply(message, {
        text: "<!channel>",
        username: "Ben Stein",
        icon_emoji: ":ben_stein:",
    });
});


controller.hears('((^(ut)[?]$)|^(:ut2004:)$)','ambient',function(bot, message) {
    bot.reply(message, {
        text: ":johnmoji::gun:",
        username: "UNREAL",
        icon_emoji: ":ut2004:",
    });
});


controller.hears('([\\s](ok)[\\s]|^(ok)[\\s]|[\\s](ok){1}$|^(ok)$)','ambient',function(bot, message) {
    bot.reply(message, {
        text: "http://1pun.ch/ok.png",
        unfurl_media: true,
        username: "Caped Baldy",
        icon_emoji: ":saitama:",
    });
});


controller.hears('([\\s](nah meanz?)[\\s]|^(nah meanz?)[\\s]|[\\s](nah meanz?){1}$|^(nah meanz?)$)','ambient',function(bot, message) {
    bot.reply(message, {
        text: "http://1pun.ch/eyebrows.gif",
        unfurl_media: true,
        username: "Caped Baldy",
        icon_emoji: ":saitama:",
    });
});


controller.hears(['([\\s](this is fine)[\\s]|^(this is fine)[\\s]|[\\s](this is fine){1}$|^(this is fine)$)'],'ambient',function(bot, message) {
    bot.reply(message, {
        text: "http://1pun.ch/thisisfine.gif",
        unfurl_media: true,
        username: "Caped Baldy",
        icon_emoji: ":saitama:",
    });
});


controller.hears('([\\s][u]{1}[\\s]|^[u]{1}[\\s]|[\\s][u]{1}$|^[u]$)','direct_message,direct_mention,mention,ambient',function(bot, message) {
    bot.reply(message, {
        text: "you*",
    });
});


controller.hears(['([\\s](oh snapz)[\\s]|^(oh snapz)[\\s]|[\\s](oh snapz){1}$|^(oh snapz)$)'],'ambient',function(bot, message) {
    bot.reply(message, {
        text: "https://media.giphy.com/media/AT6LbRAazEoPm/giphy.gif",
        unfurl_media: true,
    });
});


controller.hears(['([\\s](oh snap)[\\s]|^(oh snap)[\\s]|[\\s](oh snap){1}$|^(oh snap)$)'],'ambient',function(bot, message) {
    bot.reply(message, {
        text: "https://www.youtube.com/watch?v=9F_MFU15-lI",
        unfurl_media: true,
    });
});


controller.hears(['(food[?])'],'ambient',function(bot, message) {
    bot.reply(message,'*NO FOOD FO YOU FOO*');
});


controller.hears(['^(coffee[?])$'],'ambient',function(bot, message) {
    bot.reply(message,"*I'm afraid I can't let you do that.*");
});


controller.hears(['(^(we must go deeper)$)'],'ambient',function(bot, message) {
    bot.reply(message, {
        text: "http://inception.davepedu.com/",
        unfurl_link: true,
    });
});


controller.hears(['(^(nice)$)'],'ambient',function(bot, message) {
    bot.reply(message, {
        text: "http://i.imgur.com/lqKlotB.png",
        unfurl_media: true,
    });
});


controller.hears(['(hate u|hate you|feck|fuck|fcuk)'],'direct_message,direct_mention,mention,ambient',function(bot, message) {
    bot.reply(message,'*COME AT ME BRO*');
});


controller.hears(['(\b(sun)\b|sunn|\b(day)\b|morning|mornin)'],'direct_message,direct_mention,mention,ambient',function(bot, message) {
    bot.reply(message, {
        text: "SUNN IS TIGHT\nhttp://i.imgur.com/6kGcWnr.png",
        unfurl_media: true,
    });
});


controller.hears(['(moon|muun)|\b(night)\b'],'direct_message,direct_mention,mention,ambient',function(bot, message) {
    bot.reply(message, {
        text: "MUUN IS TIGHT\nhttp://i.imgur.com/8dAN1Md.png",
        unfurl_media: true,
    });
});


controller.hears(['PARTY HARD'],'direct_message,direct_mention,mention,ambient',function(bot,message) {
    bot.reply(message, {
        text: "FUCK YEAH! https://open.spotify.com/track/0E0bZtTG39K95uRjqBo1Mx",
        username: "Andrew W.K.",
        icon_emoji: ":andrewwk:",
    });
});

controller.hears(['(dam son)'],'direct_message,direct_mention,mention,ambient',function(bot,message) {
    bot.reply(message, {
        text: "http://i.imgur.com/7lZwLKc.jpg",
        username: "Dam Son",
        icon_emoji: ":damson:",
    });
});

controller.hears(['(kevin)'],'direct_message,ambient',function(bot,message) {
    bot.reply(message,{
        text: "KEVIN! http://i.imgur.com/U8Kbn7o.gif",
        username: "Kate McCallister",
        icon_emoji: ":homealone:",
    });
});


controller.hears(['(i found a bug)'],'direct_message,ambient',function(bot,message) {
    bot.reply(message,{
        text: "https://media.giphy.com/media/UAUtB4Oi9U4EM/giphy.gif",
        username: "John Bot",
        icon_emoji: ":johnmoji:",
    });
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


controller.hears(['hello','hi'],'direct_message,direct_mention,mention',function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    },function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(',err);
        }
    });


    controller.storage.users.get(message.user,function(err, user) {
        if (user && user.name) {
            bot.reply(message,'Hello ' + user.name + '!!');
        } else {
            bot.reply(message,'Hello.');
        }
    });
});

controller.hears(['call me (.*)'],'direct_message,direct_mention,mention',function(bot, message) {
    var matches = message.text.match(/call me (.*)/i);
    var name = matches[1];
    controller.storage.users.get(message.user,function(err, user) {
        if (!user) {
            user = {
                id: message.user,
            };
        }
        user.name = name;
        controller.storage.users.save(user,function(err, id) {
            bot.reply(message,'Got it. I will call you ' + user.name + ' from now on.');
        });
    });
});

controller.hears(['what is my name','who am i'],'direct_message,direct_mention,mention',function(bot, message) {

    controller.storage.users.get(message.user,function(err, user) {
        if (user && user.name) {
            bot.reply(message,'Your name is ' + user.name);
        } else {
            bot.reply(message,'I don\'t know yet!');
        }
    });
});


controller.hears(['shutdown'],'direct_message,direct_mention,mention',function(bot, message) {

    bot.startConversation(message,function(err, convo) {
        convo.ask('Are you sure you want me to shutdown?',[
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    },3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});


controller.hears(['uptime','identify yourself','who are you','what is your name'],'direct_message,direct_mention,mention',function(bot, message) {

    var hostname = os.hostname();
    var uptime = formatUptime(process.uptime());

    bot.reply(message,':robot_face: I am a bot named <@' + bot.identity.name + '>. I have been running for ' + uptime + ' on ' + hostname + '.');

});

function formatUptime(uptime) {
    var unit = 'second';
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'minute';
    }
    if (uptime > 60) {
        uptime = uptime / 60;
        unit = 'hour';
    }
    if (uptime != 1) {
        unit = unit + 's';
    }

    uptime = uptime + ' ' + unit;
    return uptime;
}
