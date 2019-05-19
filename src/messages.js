import Pino from 'pino'
import moment from 'moment'
import DynamoDB from './dynamodb'
import Help from './help'
import SQS from './sqs'

export default class Messages {
  constructor () {
    this.dynamodb = new DynamoDB()
    this.logger = new Pino({ level: process.env.LOG_LEVEL })
    this.help = new Help()
    this.sqs = new SQS()
  }

  async newMessage (event) {
    this.logger.info(`newMessage start at ${moment().utcOffset(8).format()}`)
    this.logger.debug(`event`, event)
    try {
      const params = JSON.parse(event.body)
      this.logger.trace('params', params)
      const message = params.message
      if (!message || !message.chat.type.includes('group')) {
        // handle edited_message and non group
        return { statusCode: 204 }
      }
      await this.dynamodb.saveMessage({ message })
      if (message.entities &&
        message.entities[0] &&
        message.entities[0].type === 'bot_command') {
        const text = message.text
        this.logger.info(text)
        if (text.match(/\/jung[hH]elp/)) {
          this.logger.info(`newMessage help start at ${moment().utcOffset(8).format()}`)
          await this.help.sendHelpMessage(message)
          this.logger.info(`newMessage help finish at ${moment().utcOffset(8).format()}`)
        }
        if (text.match(/\/top[tT]en/)) {
          this.logger.info(`newMessage topTen start at ${moment().utcOffset(8).format()}`)
          await this.sqs.sendTopTenMessage(message)
          this.logger.info(`newMessage topTen finish at ${moment().utcOffset(8).format()}`)
        }
        if (text.match(/\/top[dD]iver/)) {
          this.logger.info(`newMessage topDiver start at ${moment().utcOffset(8).format()}`)
          await this.sqs.sendTopDiverMessage(message)
          this.logger.info(`newMessage topDiver finish at ${moment().utcOffset(8).format()}`)
        }
        if (text.match(/\/all[jJ]ung/)) {
          this.logger.info(`newMessage alljung start at ${moment().utcOffset(8).format()}`)
          await this.sqs.sendAllJungMessage(message)
          this.logger.info(`newMessage alljung finish at ${moment().utcOffset(8).format()}`)
        }
        if (text.match(/\/enable[aA]ll[jJ]ung/)) {
          this.logger.info(`newMessage enableAllJung start at ${moment().utcOffset(8).format()}`)
          await this.sqs.sendEnableAllJungMessage(message)
          this.logger.info(`newMessage enableAllJung finish at ${moment().utcOffset(8).format()}`)
        }
        if (text.match(/\/disable[aA]ll[jJ]ung/)) {
          this.logger.info(`newMessage disableAllJung start at ${moment().utcOffset(8).format()}`)
          await this.sqs.sendDisableAllJungMessage(message)
          this.logger.info(`newMessage disableAllJung finish at ${moment().utcOffset(8).format()}`)
        }
      }
      this.logger.info(`newMessage finish at ${moment().utcOffset(8).format()}`)
      return { statusCode: 200 }
    } catch (e) {
      this.logger.error(e.message)
      this.logger.info(`newMessage finish with error at ${moment().utcOffset(8).format()}`)
      return { statusCode: 500 }
    }
  }
}
