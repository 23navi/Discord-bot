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


const greetings:string[]=["hello","hey","heyy","yoo","hellooo"];



Client.on("messageCreate",(message:any)=>{


    if(!message.author.bot){
        const userMessage= message.content.toLowerCase();
        console.log(userMessage);
        if( greetings.includes(userMessage)){
            console.log("This is hit");
            message.reply(replyMessage(message));
        }

        // console.log(message.content);

        // message.guild.members.fetch().then((res:any)=>{
        //     console.log("List of all the users in the server.");

        //     res.forEach((element:any) => {
        //         console.log(element.user.username + " #" +element.user.discriminator);
        //     });
        // }).catch((e:any)=>{
        //     console.log(e);
        // });

        
    }else{
        return;
    }
})


function replyMessage(message:any){
        return `Heyy ${message.author.username}! Welcome to ${message.channel.guild.name}`;
}



// console.log(token);
Client.login(token);


