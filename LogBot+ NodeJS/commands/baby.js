const fs = require('fs');

module.exports = {
  name: '/baby',
  description: 'Countdown of baby',
  execute(msg, args) {
    var babyList, message;
    // Read exist data of babyList.json
    try {
      const data = fs.readFileSync('babyList.json', 'utf8')
      babyList = JSON.parse(data);
    } catch (err) {
      console.error(err);
    }
    // Add baby to List
    // /baby <name> <hour> <minute>
    // /baby imp<name> <hour> <minute>
    // /baby list
    var name = args[0];
    var hour = args[1];
    var minute = args[2];
    if (name == "list")
    {
      for (let i in babyList) {
        // milliseconds
        let timeDiff = Date.now() - babyList[i].start;
        // Convert timer to milliseconds
        let hour2ms = babyList[i].durationH*1000*60*60;
        let minute2ms = babyList[i].durationM*1000*60;
        let totalms = hour2ms+minute2ms;
        let timeLeft = totalms-timeDiff;
        let minuteLeft = Math.floor(timeLeft/60000);
        let hourLeft = Math.floor(minuteLeft/60);
        let remainderMinute = minuteLeft%60;
        msg.channel.send("```Baby "+ babyList[i].name +": "+hourLeft+"h "+remainderMinute+"m```");
      }
      return;
    }
    if (!minute)
      minute = 0;
    // For when the timer is less than 1 hour
    if (hour.includes("m") == true)
    {
      minute = hour;
      hour = 0;
      minute = minute.substring(0, minute.length - 1);
    }
    else // Timer more than 1 hour
    {
      hour = hour.toString().substring(0, hour.length - 1);
      minute = minute.toString().substring(0, minute.length - 1);
    }
    // Create baby timer object
    let baby = {
      name: args[0],
      durationH: hour,
      durationM: minute,
      start: Date.now()
    };
    babyList.push(baby);
    // Write data into text file
    babyList = JSON.stringify(babyList);
    try {
      const data = fs.writeFileSync('babyList.json', babyList);
      msg.channel.send("🥚 Baby " + baby.name + " added.");
      //file written successfully
    } catch (err) {
      console.error(err);
    }
  },
};
