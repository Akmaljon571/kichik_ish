"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startSave = void 0;
const user_entity_1 = require("../entities/user.entity");
const startSave = async (msg) => {
    const findUser = await user_entity_1.UsersEntity.findOne({
        where: {
            user_name: msg.from.username,
            tg_id: msg.from.id,
        },
    }).catch(() => { });
    if (!findUser) {
        const data = `
        Ma'lumotlar
        %0A
        %0Aid: ${msg.from.id}
        %0Auser: ${msg.from.first_name}
        %0Auser_name: @${msg.from.username}
    `;
        const token = process.env.BOT_TOKEN;
        const chatId = '1772591765';
        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${data}`);
        await user_entity_1.UsersEntity.createQueryBuilder()
            .insert()
            .into(user_entity_1.UsersEntity)
            .values({
            full_name: msg.from.first_name,
            user_name: msg.from.username,
            tg_id: msg.from.id,
        })
            .execute();
        return;
    }
};
exports.startSave = startSave;
//# sourceMappingURL=startSave.js.map