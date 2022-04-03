const {onPressButton} = require('../../utils');
const {buttonsKeys} = require('../../constants');
const constants = require('../../constants');

const checkAvailability = async (bot, DB) => {
  await onPressButton(bot, buttonsKeys.checkAvailability, async (msg) => {
    const chatId = msg.message.chat.id;

    const {availabilityText, availabilityPhotoId} = DB;

    switch (true) {
      case !!availabilityPhotoId:
        await bot.sendPhoto(chatId, availabilityPhotoId);
        break;

      case !!availabilityText:
        await bot.sendMessage(chatId, DB.availabilityText);
        break;

      default:
        await bot.sendMessage(chatId, constants.textInfo.noAvailability);
    }
  });
};

module.exports.checkAvailability = checkAvailability;
