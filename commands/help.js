const utils = require('../utils');
const constants = require('../constants');

const listenHelp = (bot) => utils.onCommand(bot, 'help', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, constants.helpMessage);
})

module.exports.listenHelp = listenHelp;
