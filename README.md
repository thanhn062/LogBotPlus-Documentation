# LogBotPlus-Documentation
<img src="https://user-images.githubusercontent.com/12405800/132085422-46bc6e00-a02e-4f95-848c-c9e74f581238.png" width="300" height="300" /><img src="https://user-images.githubusercontent.com/12405800/133882456-f1b49d13-fea5-46a6-b9b8-8fe432ad8678.jpg" width="300" height="auto" /><img src="https://user-images.githubusercontent.com/12405800/133882760-c4ce30d0-4ebf-457f-a262-4170fd47e9c8.png" width="420" height="auto" />

#### Table of Contents
1. [About](#about)
2. [Pictures](#pictures)
3. [Files Info](#info)
4. [Code Review](#review)
5. [Setup](#setup)
6. [Setting](#setting)
7. [Note](#note)
8. [FAQ](#faq)
9. [Change Log](#changelog)
##
## <a name="about"/> About 

#### What can this bot do ?
- *Auto reconnect* when server crash and on update that doesn't require client update
- *Send* a cropped picture of tribe log to your tribe discord via webhook when there is new events in real-time with caption like
  + Your tribe killed/claimed something
- *Send* a cropped picture of chat log whenever someone message appear in chat log, beside tribemate but it will still send to discord as long as stranger's message is still visible in chat log
- *Send* a cropped picture of tribe members inside tribe window (L) to check their online/offline status every # minutes
- *Send* a full screenshot every # minutes to keep your eye on the bot screen to see if there is any complication - I suggest you mute this channel, it is mainly use for debug
- *Send* a full screenshot on parasaur alert and play a sound of your choice to the voice channel
- *Play music/sound to voice channel* when the amount of new events go above the threshold or if the amount of new events go above the threshold WITHIN the set timeframe
- *Track* server's population when it goes past the set threshold


*These features can be turn off*

## <a name="pictures"/> Pictures
<img src="https://user-images.githubusercontent.com/12405800/133885544-2c93c779-72b0-4405-92af-594cfc1a1bb3.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885554-6e85856a-7079-467f-a0f3-4ecfe898dc8d.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885548-be1a4042-6ae2-4818-8697-605466e87bd7.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885556-06958185-5576-4b6c-9453-a977b57a9ec2.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885559-9a3614b5-834e-411a-a7f5-2ed46017107b.png" width="420" height="auto" />


## <a name="info"/> Files Content & Info 
- LogBotPlus.rar
  + logbotplus.png
  + setting.ini
  + Autohotkey.exe
    + Official Autohotkey.exe from autohotkey installer 
  + Autohotkey.ahk
    + LogBotPlus 2.7.2.ahk encrypted version produced by FeiYu Encryptor
    + Hash:
    + Virustotal link:


## <a name="review"/> Code Review 

## <a name="setup"/> Setup 

Remember to run the program as admin, you don't have to but it helps with activating window
1. Set up a new channels with appropriate name (i.e. #tribe-log, #online-log, ...) or just one if you like it that way, the bot will automatically put the right caption for the content it is sending to that webhook
2. Now go into _**Server's Setting > Integrations > Create Webhook**_ and set up webhook for the #text-channels and copy and paste them into the bot window 

![Webhook](https://user-images.githubusercontent.com/12405800/132083505-7d4876ca-118b-401a-920b-afd806583809.png) 

4. Now click "Test" to make sure the Webhook is valid, and then lock it to prevent unintended changes
5. If the messages were sent successfully, you're now ready. Press the start button (F1 is default) to start the bot. 
  - (The bot will run the game and log into the game if it can't find Ark client and will automatically connect into the game for you from menu screen)

## Other Setting
1. From here change the setting for the bot to how you see fit

![features](https://user-images.githubusercontent.com/12405800/132083729-d49b580e-e9db-4331-af50-03ac0c4e525a.png)

- _**Event to send**_
  -  Uncheck any boxes that you would like to **NOT** get notify about
  -  note: everything that is not recognize by the bot will appear as cryo event (i.e. Member add, member promote, etc.. so i advise you to not uncheck cryo event, you may uncheck it if all you need are Red(death/destroyed), Green(sensor), and Purple(kill) alert )
- _**Global Chat**_ 
   - Send a cropped picture of chat log every # minutes
   - note: mute this channel and only check it as needed because of low interval, it can get pretty annoying
- _**Online Log**_ 
  -  Send a cropped picture of member inside tribelog every # minutes 
  -  note: same as above, mute this channel as well. Only need to check it if you want to investigate member online time, you may limit the #text-channel to just the leaders of the tribe
- _**Screen Check**_ 
  -  Send a full screenshot for easier debug or to check if the bot still working - same with this, it's only need if you want to check if the bot is still running
- _**Play sound to channel on parasaur alert**_ 
  -  When this is checked, on parasaur alert, the bot will switch window to discord and type ?loop alarm to start looping a soundtrack in the voice channel the discord user is currently in
  - This require a bit set up on the SoundFX Discord Bot https://top.gg/bot/430384808200372245
  - You need to invite this bot into your channel

![upload file](https://user-images.githubusercontent.com/12405800/132173810-bce0251c-d1dd-4bfe-9ad1-8cb6b7c748df.PNG)
![upload2](https://user-images.githubusercontent.com/12405800/132173939-ebd68615-0ed9-4cfe-a1c1-e6499c41356a.PNG)


  - Upload a small duration soundtrack of beeping sound of alarm or whatever you choose via the SoundFX bot command, and name it "alarm", I will include an alarm soundtrack inside LogBotPlus.rar
  - Now just leave the discord window in the background and start the bot, on parasaur alert, it will switch to Discord window and type "?loop alarm" to loop the sound track that you uploaded
  - Anyone in the discord (you don't need to be in voice to do this) can type "?stop" to stop the annoying beeping sound or it will auto stop after 15 minutes
  - *Me and my tribemates usually sleep or chill near our device and have it on max volume and joined in the voice channel. Everyone in the voice channel can hear the alarm and respond as soon as they hear it*
2. For this section, it is for the bot to monitor server's online status and population via battlemetric, you don't have to fill it if you don't need it

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

