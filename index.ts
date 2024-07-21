import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token!, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === '/start') {
    bot.sendMessage(chatId, 'Click below button to play!', {
      reply_markup: {
        inline_keyboard: [[{ text: 'Open Game', web_app: { url: 'https://www.google.com' } }]],
      },
    });
  }
});
