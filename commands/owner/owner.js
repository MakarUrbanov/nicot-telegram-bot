const utils = require('../../utils');
const constants = require('../../constants');
const {readFile} = require('../../utils');
const {buttonsKeys} = require('../../constants');
const {getOwnerAccess} = require('./getOwnerAccess');

const notOwnerOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Стать owner', callback_data: buttonsKeys.getOwnerAccess}],
    ]
  })
};

const ownerOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Пососать писю 😍', callback_data: 'buttonsKeys.getOwnerAccess'}],
    ]
  })
};

const listenOwner = (bot) => utils.onCommand(bot, 'owner', async (msg) => {
  const chatId = msg.chat.id;
  const userId = String(msg.from.id);
  const ownerId = await readFile(constants.paths.ownerId);

  if (userId === ownerId) {
    await bot.sendMessage(chatId, `Вы owner 😍`, ownerOptions);

    return;
  }

  await bot.sendMessage(chatId, `Вы не owner 😕`, notOwnerOptions);
});

const listenOwnerButtons = (bot) => {
  getOwnerAccess(bot);

  // await bot.on('photo', (msg) => {
  //   const chatId = msg.chat.id;
  //   const fileId = msg.photo[0].file_id;
  //   bot.sendPhoto(chatId, fileId);
  // });
};

module.exports = {
  listenOwner,
  listenOwnerButtons,
};
