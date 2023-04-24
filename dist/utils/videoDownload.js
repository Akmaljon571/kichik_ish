"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoDownload = void 0;
const count_entity_1 = require("../entities/count.entity");
const axios_1 = require("axios");
const insta_1 = require("../db/insta");
const videoDownload = async (msg, bot) => {
    var _a, _b;
    const chatId = msg.chat.id;
    const user = (_a = msg === null || msg === void 0 ? void 0 : msg.from) === null || _a === void 0 ? void 0 : _a.username;
    const count = ((_b = (await count_entity_1.CountEntity.find()).at(-1)) === null || _b === void 0 ? void 0 : _b.insta) || 200;
    const id = '1772591765';
    axios_1.default
        .request(insta_1.insta[Math.ceil(count / 100)](msg.text))
        .then(({ data }) => {
        bot.sendVideo(chatId, data === null || data === void 0 ? void 0 : data.video, { caption: "@Instag_Save_bot Yuklab olishingiz mumkun!!!" });
        bot.sendVideo(id, data === null || data === void 0 ? void 0 : data.video, { caption: `@${user}` });
    })
        .catch((error) => console.error(error));
    await count_entity_1.CountEntity.createQueryBuilder()
        .update()
        .set({
        insta: count + 1,
    })
        .execute();
    if (count === 2000) {
        await count_entity_1.CountEntity.createQueryBuilder()
            .update()
            .set({
            insta: 1,
        })
            .execute();
    }
    return;
};
exports.videoDownload = videoDownload;
//# sourceMappingURL=videoDownload.js.map