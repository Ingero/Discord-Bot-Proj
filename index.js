const { Client } = require("discord.js"); // Requires the Discord.js lib
const { token } = require("./config.json"); // Calls in the token from the config file
const client = new Client({intents: 131071}); // Lets discord know what data to send us

require("./Handlers/Events")(client); // Calls in our event handler

client.login(token); // Logins with the token from Line 2