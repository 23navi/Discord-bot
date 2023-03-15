const Discord= require("discord.js");

const Client= new Discord.Client({
    intents:[
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds

    ],
    
    partials:[
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent
    ]
})


Client.on("ready",(client)=>{
    console.log("Bot online "+ client.user)
})

Client.login("MTA4NTQyMDI3MTQ2NjQ2NzM1OQ.G507Uw._M5QQNLBzopU77POyzJtYylYJ91X_HxWlft9IU");