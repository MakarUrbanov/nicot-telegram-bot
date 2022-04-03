const {onPressButton, writeFile} = require('../../utils');
const {buttonsKeys} = require('../../constants');
const constants = require('../../constants');

const stepsKeys = {
  password: 'password'
};

const stepByChatId = {};

const getOwnerAccess = async (bot) => {
  onPressButton(bot, buttonsKeys.getOwnerAccess, async (msg) => {
    const chatId = msg.message.chat.id;

    if (!!stepByChatId[chatId]) {
      delete stepByChatId[chatId];
    }

    await bot.sendMessage(chatId, 'Введите пароль');
    stepByChatId[chatId] = stepsKeys.password;
  });

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (stepByChatId[chatId] !== stepsKeys.password) return;

    const text = msg.text;
    const userId = String(msg.from.id);

    if (text !== process.env.OWNER_KEY) {
      await bot.sendMessage(chatId, 'Пароль неверный');
      delete stepByChatId[chatId];

      return;
    }

    await writeFile(constants.paths.ownerId, userId);
    await bot.sendMessage(chatId, 'Пароль верный. Теперь ты owner');

    delete stepByChatId[chatId];
  });
};

module.exports.getOwnerAccess = getOwnerAccess;
