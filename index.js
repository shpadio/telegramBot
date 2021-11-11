import {Telegraf} from "telegraf";
import dotenv from "dotenv"
dotenv.config()

const bot = new Telegraf(process.env.ACCESS_TOKEN);

bot.command("start", (ctx) => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, "Welcome to bot!", {});
});

bot.launch();
