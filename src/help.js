import Telegram from './telegram'

export default class Help {
  constructor () {
    this.telegram = new Telegram()
  }

  async sendHelpMessage (message) {
    const helpMessage = `
冗員[jung2jyun4] Excess personnel in Cantonese

This bot is created for counting the number of message per participant in the group.

Commands:
/topten  show top ten 冗員s
/topdiver  show top ten 潛水員s (潛得太深會搵唔到)
/alljung  show all 冗員s
/junghelp  show help message

Issue/Suggestion: https://github.com/siutsin/telegram-jung2-bot/issues

May your 冗 power powerful -- Simon
`
    return this.telegram.sendMessage(message.chat.id, helpMessage)
  }
}
