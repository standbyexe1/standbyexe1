const mineflayer = require('mineflayer');

// Create the bot
const bot = mineflayer.createBot({
  host: 'semlerbyte-FtvF.aternos.me',  // Minecraft server IP
  port: 17061,                      // Minecraft server port (usually 25565)
  username: '2sa1',  // Minecraft username or email (for Microsoft accounts)
  version: false  // Automatically detect version
});

bot.on('spawn', () => {
  console.log('Bot has spawned!');
});

bot.on('chat', (username, message) => {
  if (message === 'hi') {
    bot.chat(`Hello, ${username}!`);
  }
});
