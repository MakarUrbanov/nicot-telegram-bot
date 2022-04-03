const {listenOwner, listenOwnerButtons} = require('./owner/owner');
const {listenHelp} = require('./help');
const {listenStart, listenStartButtons} = require('./start/start');

const commands = (bot) => {
  listenOwner(bot);
  listenHelp(bot);
  listenStart(bot);
};

const buttons = (bot) => {
  listenStartButtons(bot);
  listenOwnerButtons(bot)
};

module.exports = {
  commands,
  buttons
};
