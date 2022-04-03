const TelegramBot = require('node-telegram-bot-api');
const {commands, buttons} = require('./commands/index');
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.setMyCommands([
  {command: '/start', description: 'Начать'},
  {command: '/help', description: 'Помощь'},
])

commands(bot)
buttons(bot)
