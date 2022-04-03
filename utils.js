const fs = require('fs');
const path = require('path');

const makeDynamicString = (initialString, keyValue) => {
  const entries = Object.entries(keyValue);
  const key = entries[0][0];
  const value = entries[0][1];

  return initialString.replace(`(%{${key}})`, value);
};

const onCommand = (bot, command, callback) => bot.onText(RegExp(`/${command}`), callback);

const onPressButton = (bot, key, callback) => bot.on('callback_query', async (msg) => {
  const data = msg.data;

  if (data !== key) return;

  await callback(msg);
});

const writeFile = async (path, text) => fs.writeFile(path, text, (error) => !error);

const readFile = (path) => {
  let data = fs.readFileSync(path, 'utf8');

  return data;
};

module.exports = {
  makeDynamicString,
  onCommand,
  onPressButton,
  writeFile,
  readFile,
};
