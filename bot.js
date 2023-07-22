const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = OTcwNjgzNTc5OTA4NjM2Njgy.GQCHgY.Q7TcSeqqu06m_UrhxPHiO9ouWQIFtGsoqXxKOs; // Replace this with your actual bot token
const channelID = 1132068606788767754; // Replace this with the channel ID where you want to send messages

const messageCount = 10000;

client.once('ready', () => {
  console.log('Bot is ready!');
  sendMessages();
});

async function sendMessages() {
  try {
    const channel = await client.channels.fetch(channelID);
    for (let i = 1; i <= messageCount; i++) {
      await channel.send(`Message ${i}`);
      await delay(1000); // 1000 milliseconds (1 second) delay between messages
    }
    console.log('Messages sent successfully.');
  } catch (error) {
    console.error('Error sending messages:', error);
  } finally {
    client.destroy();
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

client.login(token);
