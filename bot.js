const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
client.on('ready', () => {
    console.log('I am ready!');
});
bot.on('message', (message) => {
    if(message.content == 'bot-info') {
        message.channel.senMessage ('Този бот е създаден от danino123! Версия на бота:V0.1 alpha');
    }
});
bot.on('message'), (message) => {
    if(message.content = '!help') {
      message.channel.senMessage('SOON');
    }
};

bot.on('message'), (message) => {
    if(message.content = '!creator') {
      message.channel.senMessage('Този бот е направен от danino123#5250');
    }
};
bot.login('NTAxMDI4NTg5MTAyNDMyMjg3.DtquIA.T7Hwnz5lNlTUZsCJz7klyvhIP_0');





