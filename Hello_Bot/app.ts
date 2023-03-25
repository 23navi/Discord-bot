const Discord = require("discord.js");

const { token } = require("./config.json");

const Client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.Guilds,
  ],

  partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
    Discord.Partials.User,
    Discord.Partials.GuildScheduledEvent,
  ],
});

Client.on("ready", (client: any) => {
  console.log("Bot online " + client.user.tag);
});




Client.on("messageCreate",(message:any)=>{


    if(!message.author.bot){
        const userMessage= message.content.toLowerCase();

        console.log(message.content);

        message.guild.members.fetch().then((res:any)=>{
            console.log("List of all the users in the server.");

            res.forEach((element:any) => {
                console.log(element.user.username + " #" +element.user.discriminator);
            });
        }).catch((e:any)=>{
            console.log(e);
        });

        message.reply(replyMessage(userMessage,message));
    }else{
        return;
    }
})


function replyMessage(userMessage:any,message:any){
    if(userMessage=="!help" || userMessage=="!commands"){
        return `This server provides many features like !help, !commands, !maths`;
    }else{
        return `Heyy ${message.author.username}! Welcome to ${message.channel.guild.name}`;
    }
}






// console.log(token);
Client.login(token);


