[![serverless](http://public.serverless.com/badges/v3.svg)](https://www.serverless.com)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)
[![dependency](https://david-dm.org/siutsin/telegram-jung2-bot.svg)](https://david-dm.org/siutsin/telegram-jung2-bot.svg)
[![devDependency Status](https://david-dm.org/siutsin/telegram-jung2-bot/dev-status.svg)](https://david-dm.org/siutsin/telegram-jung2-bot#info=devDependencies)
[![Build Status](https://travis-ci.org/siutsin/telegram-jung2-bot.svg?branch=master)](https://travis-ci.org/siutsin/telegram-jung2-bot)
[![Coverage Status](https://coveralls.io/repos/github/siutsin/telegram-jung2-bot/badge.svg)](https://coveralls.io/github/siutsin/telegram-jung2-bot)

# telegram-jung2-bot

Add the bot to your group at [@jung2_bot](https://bit.ly/github-jung2bot)

<b>冗員</b>[jung2jyun4] Excess personnel in Cantonese

This bot is created for counting the number of message per participant in the group.

## Setup

### AWS Credential

Refer to [AWS Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

### Telegram API Token

Serverless will retrieve the Telegram API Token via [SSM](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html) from a SecureString.

Naming convention - `{service}-{stage}-telegram-api-token`
For example - `jung2bot-dev-telegram-api-token`

### Create `.env` files

Copy `.env.example` and rename the file to `.env.{stage}`.
For example - `.env.development` and `.env.production`

### Deploy! 🚀

```bash
$ sls deploy
```

## Usage

|command|info|
|---|---|
|`/topten`|Show the percentage of top ten participants for the past 7 days|
|`/alljung`|Show the percentage of all participants for the past 7 days|
|`/junghelp`|Show help message|

## Sponsor

[RisingStack](https://trace.risingstack.com?utm_source=github&utm_medium=sponsored&utm_content=siutsin/telegram-jung2-bot)

## Author

[@Simon__Li](https://bit.ly/github-twitter)

## Code Style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

`telegram-jung2-bot` is available under the [MIT license](https://siutsin.mit-license.org). See the LICENSE file for more info.
