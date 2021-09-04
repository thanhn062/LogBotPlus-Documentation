# LogBotPlus-Documentation
## Setup
Remember to run the program as admin, you don't have to but it helps with activating window
1. Set up a new channels with appropriate name (i.e. #tribe-log, #online-log, ...) or just one if you like it that way, the bot will automactically put the right caption for the content it is sending to that webhook
2. Now go into _**Server's Setting > Integrations > Create Webhook**_ and set up webhook for the #text-channels and copy and paste them into the bot window 

![Webhook](https://user-images.githubusercontent.com/12405800/132083505-7d4876ca-118b-401a-920b-afd806583809.png) 

4. Now click "Test" to make sure the Webhook is valid, and then lock it to prevent unintended changes
5. Now you can press F1 to start the bot or mess with the setting if you want :)
7. From here change the setting for the bot to how you see fit

![features](https://user-images.githubusercontent.com/12405800/132083729-d49b580e-e9db-4331-af50-03ac0c4e525a.png)

- _**Event to send**_ - Uncheck any boxes that you would like to **NOT** get notify about - note: everything that is not recognize by the bot will appear as cryo event (i.e. Member add, member promote, etc.. so i advise you to not uncheck cryo event, you may uncheck it if all you need are Red(death/destroyed), Green(sensor), and Purple(kill) alert )
- _**Global Chat**_ - Send a cropped picture of chat log every # minutes - I advise you to mute this channel and only check it as need because of low interval it can get pretty annoying
- _**Online Log**_ - Send a cropped picture of member inside tribelog every # minutes - same with this, as you only need to check it if you want to investigate insider online time, you may limit the #text-channel to just the leaders of the tribe
- _**Screen Check**_ - Send a full screenshot for easier debug or to check if the bot still working - same with this, it's only need if you want to check if the bot is still running
- _**Play sound to channel on parasaur alert**_ - When this is checked, on parasaur alert, the bot will switch window to discord and type ?loop alarm to start looping a soundtrack in the voice channel the discord user is currently in
  - This require a bit set up on the SoundFX Discord Bot https://top.gg/bot/430384808200372245
  - You need to invite this bot into your channel
  - Upload a small duration soundtrack of beeping sound of alarm or whatever you choose via the SoundFX bot command, and name it "alarm", I will include an alarm soundtrack inside LogBotPlus.rar
  - Now just leave the discord window in the background and start the bot, on parasaur alert, it will switch to Discord window and type "?loop alarm" to loop the sound track that you uploaded
  - Anyone in the discord can type "?stop" to stop the annoying beeping sound or it will auto stop after 15 minutes
7. For this section, it is for the bot to monitor server's online status and population via battlemetric, you don't have to fill it if you don't need it

![Server](https://user-images.githubusercontent.com/12405800/132084181-60b51a2c-6881-491d-9a16-1022dc7b0b00.png)

How To Get Your Server's ID On Battlemetric
- Google your server name + battlemetric at the end for example
- "smalltribes14 battlemetric"
- Click the first link and this will be your Battlemetric server's ID, paste it into the client 

![serverid](https://user-images.githubusercontent.com/12405800/132084285-004bfa6d-6f97-47b1-a21a-2118921344b0.png)

## Demo

Tribe Log 

![demo](https://user-images.githubusercontent.com/12405800/132084402-fb406f92-1676-4851-a7d2-f30ed530a11c.png)

Parasour Alert - play sound on voice channel

![loopalarm](https://user-images.githubusercontent.com/12405800/132085254-99a58272-9665-48d8-a296-7a1a6af4a64a.png)

Global Chat Log

![globalchat](https://user-images.githubusercontent.com/12405800/132084450-1809f0b9-deb5-469f-923a-9b391af92a97.png)

Online Log

![onlinelog](https://user-images.githubusercontent.com/12405800/132084475-71afa1f7-fcc4-4f37-a477-6e0c8839688b.png)

Screen Check

![screen check](https://user-images.githubusercontent.com/12405800/132084509-43bafb87-45b5-4220-a267-330d8e324e70.png)

