const fs = require('fs');

module.exports = {
  name: '/forcefield',
  description: 'Track a list of tek forcefield',
  execute(msg, args) {
    var forcefieldList;
    // Read existing list of gennies
    try {
      const data = fs.readFileSync('forcefieldList.json', 'utf8')
      forcefieldList = JSON.parse(data);
    } catch (err) {
      console.error(err)
    }

    //  Add generator to list
    //  !forcefield add <name> <element> <radius>
    if (args[0] == "add")
    {
      if (!args[1] || !args[2] || !args[3])
      {
        msg.channel.send("``` Syntax: /forcefield list -- show list of generators\n \t\t/forcefield add <name> <element> <radius>\n \t\t/forcefield reset <id> <element>\n \t\t/forcefield delete <id>```");
        return;
      }
      let forcefield = {
        name: args[1],
        element: parseInt(args[2]),
        radius: parseInt(args[3]),
        start:  Date.now(),
      };
      forcefieldList.push(forcefield);
      // Write data into text file
      forcefieldList = JSON.stringify(forcefieldList);
      try {
        const data = fs.writeFileSync('forcefieldList.json', forcefieldList);
        msg.channel.send("🛡 Tek Forcefield " + forcefield.name + " has been added.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
    //  Show generator list
    else if (args[0] == "list")
    {
      // 1 element run for 270 minutes on max range
      msg.channel.send("```fix\n🛡 TEK FORCEFIELD LIST```");
      for (let i in forcefieldList) {
        // if forcefield on radius 1, cost 1 element per hour
        // if forcefield on radius 10, cost 10 element per hour
	
        // TIME CALC
        let hourCap = Math.round(forcefieldList[i].element/forcefieldList[i].radius,2);
        let minuteCap = hourCap*60;
        let minuteRun = Math.floor((Date.now() - forcefieldList[i].start)/60000);

        // ELEMENT CALC
        let elementStart = forcefieldList[i].element;
        let elementUsed = Math.ceil(minuteRun/60)*(forcefieldList[i].radius-0.13);
        let elementLeft = Math.floor(elementStart-elementUsed,2) + "/" + elementStart;
        let timeLeft = Math.round(Math.floor(elementStart-elementUsed,2)/forcefieldList[i].radius,2);

	// DAY & HOUR
        // day left
	let minuteLeft = minuteCap - minuteRun
	let hourLeft = Math.floor(minuteLeft/60);
        let dayLeft = Math.floor(hourLeft/24);
        let dayHourLeft = hourLeft%24;
        let message = "``` ID: "+i+"\n Name: "+forcefieldList[i].name+"\n Radius: "+forcefieldList[i].radius+"\n Element left: "+elementLeft+"\n Time left: "+timeLeft + "/" +hourCap+" hours ("+dayLeft+" days "+dayHourLeft+" hours)```";
       
	/*
        // TIME CALC
        let hourCap = Math.round(forcefieldList[i].element/forcefieldList[i].radius,2);
        let minuteCap = hourCap*60;
        let minuteRun = Math.floor((Date.now() - forcefieldList[i].start)/60000);

        // convert to hours
        let hourLeft = Math.floor(minuteLeft/60);
        // day left
        let dayLeft = Math.floor(hourLeft/24);
        let dayHourLeft = hourLeft%24;
        // ELEMENT CALC
        let elementStart = forcefieldList[i].element;        
	let elementUsed = Math.ceil(minuteRun/60)*(forcefieldList[i].radius);
        let elementLeft = Math.floor(elementStart-elementUsed,2) + "/" + elementStart;
        let message = "``` ID: "+i+"\n Name: "+forcefieldList[i].name+"\n Element left: "+elementLeft+"\n Time left: "+hourLeft + "/" +hourCap+" hours ("+dayLeft+" days "+dayHourLeft+" hours)```";
        */
        msg.channel.send(message);
      }
    }
    else if (args[0] == "help")
    {
      msg.channel.send("``` Syntax: !forcefield list -- show list of generators\n \t\t!forcefield add <name> <element> <radius>\n \t\t!forcefield reset <id> <element>\n \t\t!forcefield delete <id>```");
    }
    //  !genny reset <id> <element>
    else if (args[0] == "reset")
    {
      if (!args[1] || !args[2])
      {
        msg.channel.send("``` Syntax: !forcefield list -- show list of generators\n \t\t!forcefield add <name> <element> <radius>\n \t\t!forcefield reset <id> <element>\n \t\t!forcefield delete <id>```");
        return;
      }
      let id = args[1];
      // Change object element & start
      forcefieldList[id].element = parseInt(args[2]);
      forcefieldList[id].start = Date.now();
      var name = forcefieldList[id].name;
      // Write data into text file
      forcefieldList = JSON.stringify(forcefieldList);
      try {
        const data = fs.writeFileSync('forcefieldList.json', forcefieldList);
        msg.channel.send("Tek Forcefield " + name + " has been reset.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
    //  !genny delete <id>
    else if (args[0] == "delete")
    {
      if (!args[1])
      {
        msg.channel.send("``` Syntax: !forcefield list -- show list of generators\n \t\t!forcefield add <name> <element> <radius>\n \t\t!forcefield reset <id> <element>\n \t\t!forcefield delete <id>```");
        return;
      }
      let id = args[1];
      let name = forcefieldList[id].name;
      forcefieldList.splice(id,1);
      // Write data into text file
      forcefieldList = JSON.stringify(forcefieldList);
      try {
        const data = fs.writeFileSync('forcefieldList.json', forcefieldList);
        msg.channel.send("Tek Forcefield " + name + " has been deleted.");
        //file written successfully
      } catch (err) {
        console.error(err);
      }
    }
  },
};
