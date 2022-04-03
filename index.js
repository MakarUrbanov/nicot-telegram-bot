const TelegramBot = require('node-telegram-bot-api');
const {commands, buttons} = require('./commands/index');
require('dotenv').config();
const dataBase = require('./dataBase')

const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

bot.setMyCommands([
  {command: '/start', description: 'Начать'},
  {command: '/help', description: 'Помощь'},
])

const dataBaseLink = dataBase

commands(bot, dataBaseLink)
buttons(bot, dataBaseLink)
