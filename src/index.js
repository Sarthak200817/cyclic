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
const { Client, GatewayIntentBits, Partials } from "npm:discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions
  ],
  partials: [Partials.Channel,Partials.Message, Partials.Reaction],
});
const prefix = ";"
client.login(process.env.DISCORDJS_BOT_TOKEN);
//after this all code is for discord
client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}`)
});
var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);


/*client.on('messageReactionAdd',(reaction,user)=>{
console.log(reaction.emoji.name);
console.log(user.username);
}   );

client.on("messageCreate", (message) => {//messge reply
   if (message.content === `hi`) {
        message.channel.send(`hello ${message.author.username}`)
    //console.log(` [${message.author.tag}]: ${message.content}`);
   }*/
   /* try{ 
       }
      catch(err){
        setTimeout(function(){
          message.delete();
        },3000)
        message.channel.send("Not a number");
      }
      console.log(i);*/
      var i=1;
      
      client.on("messageCreate", (message) => {
        x=message.content;
        var x=parseInt(x);

    if(message.content.startsWith("{reset}")){
      if(message.author.tag==="FaZe Beluga#1819"){
      setTimeout(function(){
        message.delete();
      });
      var reset=message.content;
      reset=reset.replace("{reset}","");
      reset=parseInt(reset);
    i=reset;}
    else{
      message.delete();
    }
    
  }
      
   else if(i===x){
      message.react("✅");
      i=i+1;
    }
    else{
      setTimeout(function(){
      message.delete();
      },3000);
      message.react("❌");
    }
    });
   /*
   if (message.content==='shit'||message.content==='Shit'||message.content==='Poop'||message.content==='poop'){
    message.react('💩');

   }
   //reactions
if(message.content.startsWith(prefix)){
    const [cmd,...args]=message.content
    .trim()
    .substring(prefix.length)
    .split(/\s+/);
  console.log(cmd);
  console.log(args);
   if(cmd==='mute'){
    message
   }
}
//commands
});*/
