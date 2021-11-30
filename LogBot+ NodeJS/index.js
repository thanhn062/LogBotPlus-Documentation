require('dotenv').config();

const Discord = require('discord.js');
// To read/write files
const fs = require('fs');
// Bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
// dynamic commands
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  var minuteSinceMute = 0;
  var tribelogChannel = bot.channels.get("862837276623110154"); // Put your tribelog channel ID here
  var generalChannel = bot.channels.get("844285346284044373"); // Put your channel ID for baby notifications here
  var forcegenChannel = bot.channels.get("873299575664955423"); // Put your forcefield+tekgen channel ID here
  var setting, babyList;
  // AUTO UNMUTE
  function unmuteCheck() {
    // Read existing list of forcefields
    try {
      const data = fs.readFileSync('setting.json', 'utf8')
      setting = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }
    // Read existing list of babies
    try {
      const data = fs.readFileSync('babyList.json', 'utf8')
      babyList = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }

    // Auto Unmute Logbot
    if (setting.mute == false)
      minuteSinceMute = 0;
    if (setting.mute == true)
    {
      minuteSinceMute++; 
      tribelogChannel.send("```Logbot unmute in "+ (10-minuteSinceMute) +" minute(s)```");
    }
    if (minuteSinceMute >= 10)
    {
      tribelogChannel.send("```🔔 LogBot Notification```");
      setting.mute = false;
      minuteSinceMute = 0;
      // Write data into setting
      logbotSetting = JSON.stringify(setting);
      try {
        const data = fs.writeFileSync('setting.json', logbotSetting);
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
    // Baby Timer
    // Get end time of timer
    for (let i in babyList) {
      // milliseconds
      let timeDiff = Date.now() - babyList[i].start;
      // Convert timer to milliseconds
      let hour2ms = babyList[i].durationH*1000*60*60;
      let minute2ms = babyList[i].durationM*1000*60;
      let totalms = hour2ms+minute2ms;
      let timeLeft = totalms-timeDiff;
      let minuteLeft = Math.floor(timeLeft/60000);
      if (minuteLeft < 0) {
        // Delete it out of database
        babyList.splice(i,1);
        // Write data into text file
        babyList = JSON.stringify(babyList);
        try {
          const data = fs.writeFileSync('babyList.json', babyList);
          //file written successfully
        } catch (err) {
          console.error(err);
        }
        return;
      }
      if (babyList[i].name.includes("imp"))
      {
        var impName = babyList[i].name.replace('imp','');
        if (minuteLeft <= 0)
          generalChannel.send("```🍼 Time to imprint " + impName + ".```");
      }
      else
      {
        if (minuteLeft <= 5)
          generalChannel.send("```🐣 Baby " + babyList[i].name + " is coming out in " + minuteLeft + " minute(s).```");
      }
    }
  }
  setInterval(unmuteCheck,60000);

  // GENNY + FORCEFIELD 
  var minutes = 240, the_interval = minutes * 60 * 1000;
  setInterval(function() {
    // Read existing list of forcefields
    try {
      const data = fs.readFileSync('forcefieldList.json', 'utf8')
      forcefieldList = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }
    // Read existing list of gennies
    try {
      const data = fs.readFileSync('gennyList.json', 'utf8')
      gennyList = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }

    for (let i in forcefieldList) {
      // TIME CALC
      let hourCap = Math.round(forcefieldList[i].element/forcefieldList[i].radius,2);
      let minuteCap = hourCap*60;
      let minuteRun = Math.floor((Date.now() - forcefieldList[i].start)/60000);

      // ELEMENT CALC
      let elementStart = forcefieldList[i].element;
      let elementUsed = Math.ceil(minuteRun/60)*(forcefieldList[i].radius);
      let elementLeft = Math.floor(elementStart-elementUsed,2) + "/" + elementStart;
      let timeLeft = Math.round(Math.floor(elementStart-elementUsed,2)/forcefieldList[i].radius,2);
      let message = "``` ID: "+i+"\n Name: 🛡️"+forcefieldList[i].name+"\n Radius: "+forcefieldList[i].radius+"\n Element left: "+elementLeft+"\n Time left: "+timeLeft + "/" +hourCap+" hours```";

      if (timeLeft < 24)
      {
        forcegenChannel.send("```diff\n- The forcefield " + forcefieldList[i].name + " is running out soon !```");
        forcegenChannel.send(message);
      }
    }
    for (let i in gennyList) {
      // TIME CALC
      let minuteCap = 270*gennyList[i].element;
      let minuteRun = Math.floor((Date.now() - gennyList[i].start)/60000)
      let minuteLeft = minuteCap - minuteRun
      // convert to hours
      let hourCap = minuteCap/60;
      let hourLeft = Math.floor(minuteLeft/60);
      // day left
      let dayLeft = Math.floor(hourLeft/24);
      let dayHourLeft = hourLeft%24;
      // ELEMENT CALC
      let elementStart = gennyList[i].element;
      let elementUsed = minuteRun/270;
      let elementLeft = Math.floor(elementStart-elementUsed,2) + "/" + elementStart;
      let message = "``` ID: "+i+"\n Name: ⚡"+gennyList[i].name+"\n Element left: "+elementLeft+"\n Time left: "+hourLeft + "/" +hourCap+" hours```";
      if (hourLeft < 24)
      {
        forcegenChannel.send("```diff\n- The tek generator " + gennyList[i].name + " is running out soon !```");
        forcegenChannel.send(message);
      }
    }
  }, the_interval);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  //console.info(`Called command: ${command}`);
  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
