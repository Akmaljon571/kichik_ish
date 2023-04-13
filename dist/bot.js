"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require("node-telegram-bot-api");
const typeorm_1 = require("./config/typeorm");
const startSave_1 = require("./utils/startSave");
const videoDownload_1 = require("./utils/videoDownload");
typeorm_1.myDataSource
    .initialize()
    .then(() => console.log('Baza Connect!!!'))
    .catch((err) => console.error(err));
const BOT_TOKEN = '6114708843:AAFwu-eeDN7u_yeHZpqS0qdRumfnYLXyQlA';
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text == '/start') {
        const resp = 'Assalomu Aleykum Instagram link jonating';
        (0, startSave_1.startSave)(msg);
        return bot.sendMessage(chatId, resp);
    }
    if (msg.text.split('m/')[0] == 'https://www.instagram.co') {
        (0, videoDownload_1.videoDownload)(msg, bot);
        return;
    }
    bot.sendMessage(chatId, "Kechirasiz ma'lumot hato");
});
//# sourceMappingURL=bot.js.map