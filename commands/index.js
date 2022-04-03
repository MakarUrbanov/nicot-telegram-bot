const {listenOwner, listenOwnerButtons} = require('./owner/owner');
const {listenHelp} = require('./help');
const {listenStart, listenStartButtons} = require('./start/start');

const commands = (bot, DB) => {
  listenOwner(bot, DB);
  listenHelp(bot, DB);
  listenStart(bot, DB);
};

const buttons = (bot, DB) => {
  listenStartButtons(bot, DB);
  listenOwnerButtons(bot)
};

module.exports = {
  commands,
  buttons
};
