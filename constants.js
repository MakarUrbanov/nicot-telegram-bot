const path = require('path');
const helloMessage = `
Привет, (%{firstName})
`

const helpMessage = `
/start - Начать
/help - Помощь
`

const buttonsKeys = {
  checkAvailability: 'checkAvailability',
  getOwnerAccess: 'getOwnerAccess'
}

const textInfo = {
  noAvailability: 'Наличие отсутствует'
}

const paths = {
  ownerId: path.join(__dirname, 'files', 'ownerId.txt')
}

module.exports = {
  helpMessage,
  helloMessage,
  buttonsKeys,
  textInfo,
  paths,
}
