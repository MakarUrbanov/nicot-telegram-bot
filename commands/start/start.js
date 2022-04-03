const utils = require('../../utils');
const constants = require('../../constants');
const {makeDynamicString} = require('../../utils');
const {buttonsKeys} = require('../../constants');
const {checkAvailability} = require('./checkAvailability');

const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Узнать наличие', callback_data: buttonsKeys.checkAvailability}],
    ]
  })
};

const listenStart = (bot) => utils.onCommand(bot, 'start', (msg) => {
  const chatId = msg.chat.id;
  const userName = msg.from.first_name;

  bot.sendMessage(chatId, makeDynamicString(constants.helloMessage, {firstName: userName}), options);
});

const listenStartButtons = (bot, DB) => {
  checkAvailability(bot, DB);
};

module.exports = {
  listenStart,
  listenStartButtons
};
