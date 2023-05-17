/*class members{
  constructor(name){
this.name=name;
  }
get name(){
console.log(this.namename);
  return this.name;
}
}*/

/*const { Client, GatewayIntentBits } from "npm:discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});*/
import {
  Client,
  GatewayIntentBits,
  Partials,
} from "./path/to/@discordjs/formatter";

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.Reaction,
  ],
});

const prefix = ";"

client.login(Deno.env.get("DISCORDJS_BOT_TOKEN"));

// after this all code is for discord
client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}`);
});

const HTTP_PORT = Deno.env.get("PORT") || 8080;
import express from "https://cdn.skypack.dev/express";
const app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

var i = 1;

client.on("messageCreate", (message) => {
  const x = message.content;
  const parsedX = parseInt(x);

  if (message.content.startsWith("{reset}")) {
    if (message.author.tag === "FaZe Beluga#1819") {
      setTimeout(() => {
        message.delete();
      });
      let reset = message.content.replace("{reset}", "");
      reset = parseInt(reset);
      i = reset;
    } else {
      message.delete();
    }
  } else if (i === parsedX) {
    message.react("✅");
    i++;
  } else {
    setTimeout(() => {
      message.delete();
    }, 3000);
    message.react("❌");
  }
});
