import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';

export const telegramBot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
telegramBot.start((ctx) => ctx.reply('Welcome'));
telegramBot.help((ctx) => ctx.reply('Send me a sticker'));
telegramBot.on(message('sticker'), (ctx) => ctx.reply('👍'));
telegramBot.hears('hi', (ctx) => ctx.reply('Hey there'));
telegramBot.launch();
