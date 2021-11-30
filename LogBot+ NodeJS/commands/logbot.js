const fs = require('fs');

module.exports = {
  name: '/logbot',
  description: 'Control logbot on discord',
  execute(msg, args) {
    // Read existing setting
    var logbotSetting, message, newSetting;
    try {
      const data = fs.readFileSync('setting.json', 'utf8')
      setting = JSON.parse(data);
      //console.log(setting);
    } catch (err) {
      console.error(err)
    }
    // Mute logbot
    if (args[0] == "mute")
    {
      msg.channel.send("```🔕 LogBot Notification```");
      // Change value of mute in setting.json
      newSetting = {
        mute: true,
        sound: setting.sound
      };
    }
    // Unmute Logbot
    else if (args[0] == "unmute")
    {
      msg.channel.send("```🔔 LogBot Notification```");
      // Change value of mute in setting.json
      newSetting = {
        mute: false,
        sound: setting.sound
      };
    }
    // Sound On
    else if (args[0] == "soundon")
    {
      msg.channel.send("```🔈 LogBot Sound Alert```");
      // Change value of mute in setting.json
      newSetting = {
        mute: setting.mute,
        sound: true
      };
    }
    // Sound Off
    else if (args[0] == "soundoff")
    {
      msg.channel.send("```🔇 LogBot Sound Alert```");
      // Change value of mute in setting.json
      newSetting = {
        mute: setting.mute,
        sound: false
      };
    }
    else if (args[0] == "global")
    {
      args = args.slice(1).join(' ')
      message = "global|" + args
      fs.writeFile('command.txt', message, err => {
        if (err) {
          console.error(err)
          return
        }
      });
    }
    else if (args[0] == "tribe")
    {
      args = args.slice(1).join(' ')
      message = "tribe|" + args
      fs.writeFile('command.txt', message, err => {
        if (err) {
          console.error(err)
          return
        }
      });
    }
    else if (args[0] == "update")
    {
      message = "update|"
      fs.writeFile('command.txt', message, err => {
        if (err) {
          console.error(err)
          return
        }
      });
    }
    // Write data into text file
    if (newSetting)
    {
      logbotSetting = JSON.stringify(newSetting);
      try {
        const data = fs.writeFileSync('setting.json', logbotSetting);
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
  },
};
