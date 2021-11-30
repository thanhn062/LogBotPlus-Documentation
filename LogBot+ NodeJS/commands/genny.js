const fs = require('fs');

module.exports = {
  name: '/tekgen',
  description: 'Track a list of generators',
  execute(msg, args) {
    var gennyList;
    // Read existing list of gennies
    try {
      const data = fs.readFileSync('gennyList.json', 'utf8')
      gennyList = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }

    //  Add generator to list
    //  /tekgen add <name> <element>
    if (args[0] == "add")
    {
      if (!args[1] || !args[2])
      {
        msg.channel.send("``` Syntax: /tekgen list -- show list of generators\n \t\t/tekgen add <name> <element>\n \t\t/tekgen reset <id> <element>\n \t\t/tekgen delete <id>```");
        return;
      }
      let genny = {
        name: args[1],
        element: parseInt(args[2]),
        start:  Date.now(),
      };
      gennyList.push(genny);
      // Write data into text file
      gennyList = JSON.stringify(gennyList);
      try {
        const data = fs.writeFileSync('gennyList.json', gennyList);
        msg.channel.send("⚡ Tek Generator " + genny.name + " has been added.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
    //  Show generator list
    else if (args[0] == "list")
    {
      // 1 element run for 270 minutes on max range
      msg.channel.send("```yaml\n⚡ TEK GENERATORS LIST```");
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
        let message = "``` ID: "+i+"\n Name: "+gennyList[i].name+"\n Element left: "+elementLeft+"\n Time left: "+hourLeft + "/" +hourCap+" hours ("+dayLeft+" days "+dayHourLeft+" hours)```";

        msg.channel.send(message);
      }
    }
    else if (args[0] == "help")
    {
      msg.channel.send("``` Syntax: /tekgen list -- show list of generators\n \t\t/tekgen add <name> <element>\n \t\t/tekgen reset <id> <element>\n \t\t/tekgen delete <id>```");
    }
    //  /tekgen reset <id> <element>
    else if (args[0] == "reset")
    {
      if (!args[1] || !args[2])
      {
        msg.channel.send("``` Syntax: /tekgen list -- show list of generators\n \t\t/tekgen add <name> <element>\n \t\t/tekgen reset <id> <element>\n \t\t/tekgen delete <id>```");
        return;
      }
      let id = args[1];
      // Change object element & start
      gennyList[id].element = parseInt(args[2]);
      gennyList[id].start = Date.now();
      var name = gennyList[id].name;
      // Write data into text file
      gennyList = JSON.stringify(gennyList);
      try {
        const data = fs.writeFileSync('gennyList.json', gennyList);
        msg.channel.send("Tek Generator " + name + " has been reset.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
    //  /tekgen delete <id>
    else if (args[0] == "delete")
    {
      if (!args[1])
      {
        msg.channel.send("``` Syntax: /tekgen list -- show list of generators\n \t\t/tekgen add <name> <element>\n \t\t/tekgen reset <id> <element>\n \t\t/tekgen delete <id>```");
        return;
      }
      let id = args[1];
      let name = gennyList[id].name;
      gennyList.splice(id,1);
      // Write data into text file
      gennyList = JSON.stringify(gennyList);
      try {
        const data = fs.writeFileSync('gennyList.json', gennyList);
        msg.channel.send("Tek Generator " + name + " has been deleted.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
  },
};
