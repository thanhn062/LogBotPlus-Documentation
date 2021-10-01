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
- __*Auto reconnect*__ when server crash and on update that doesn't require client update
- __*Send a cropped picture of tribe log*__ to your tribe discord via webhook on new events
- __*Send a cropped picture of chat log*__ upon new messages in chat log
- __*Send a cropped picture of tribe members*__ inside tribe window (L) to check their online/offline status every # minutes
- __*Send a full screenshot every # minutes*__ to keep your eye on the bot screen
- __*Send a full screenshot on parasaur alert*__ and play a song of your choice to the voice channel
- __*Play a song to voice channel when the amount of new events go above the threshold*__ or if the amount of new events go above the threshold WITHIN the set timeframe
- __*Track server's populatio*n__ when it goes past the set threshold

__These features can be turn off__

Discord Server: https://discord.gg/G9tcWccE

## <a name="pictures"/> Pictures
<img src="https://user-images.githubusercontent.com/12405800/133885544-2c93c779-72b0-4405-92af-594cfc1a1bb3.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885554-6e85856a-7079-467f-a0f3-4ecfe898dc8d.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885548-be1a4042-6ae2-4818-8697-605466e87bd7.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885556-06958185-5576-4b6c-9453-a977b57a9ec2.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/133885559-9a3614b5-834e-411a-a7f5-2ed46017107b.png" width="420" height="auto" />


## <a name="info"/> Files Content & Info 
- LogBotPlus.rar
  + logbotplus.png
    + Splash image
  + setting.ini
    + Data
  + Autohotkey.exe
    + Official Autohotkey.exe from autohotkey installer 
  + Autohotkey.ahk
    + LogBotPlus 2.7.2.ahk - encrypted version produced by FeiYu Encryptor - reviewed by 
    + Hash:
    + Virustotal link:


## <a name="review"/> Code Review 

## <a name="setup"/> Setup 

1. Set up the text channels, here are some that I made for my tribe discord
  - ⎣📜⎤ᴛʀɪʙᴇ ʟᴏɢ
  - ⎣🌎⎤ɢʟᴏʙᴀʟ ᴄʜᴀᴛ
  - ⎣📊⎤ᴏɴʟɪɴᴇ ʟᴏɢ
  - ⎣📺⎤ꜱᴄʀᴇᴇɴ ᴄʜᴇᴄᴋ
  - ⎣📖⎤ʙᴏᴏᴋᴍᴀʀᴋ
    + copy message/media link from other text channels and paste it here to bookmark an important message
2. Now go into _**Server's Setting > Integrations > Create Webhook**_ and set up webhook for the #text-channels

<img src="https://support.discord.com/hc/article_attachments/1500000463501/Screen_Shot_2020-12-15_at_4.41.53_PM.png" width="500" height="auto" />

3. Copy and paste them into the script GUI

<img src="https://user-images.githubusercontent.com/12405800/135339823-7498e397-22c9-4c75-89bd-362ad4e71a68.png" width="420" height="auto" />
<img src="https://user-images.githubusercontent.com/12405800/132083505-7d4876ca-118b-401a-920b-afd806583809.png" width="420" height="auto" />

4. Click "Test" to make sure the webhook is valid, and then lock it to prevent unintended changes
5. If the messages were sent successfully, click START.
  - The bot will run the game and log into the game if it can't find Ark client and will automatically connect into the game for you from menu screen

## <a name="setting"/> Setting

- _**Tribe Log - Event to send**_
  -  Uncheck any event that you would like to **NOT** get notify
  -  note: Other insignificant events that is not recognize by the bot will appear as cryo event (i.e. Member add, member promote, tribe destroy, etc.. .You may uncheck it if all you need are Red(death/destroyed), Green(sensor), and Purple(kill) alert )
- _**Global Chat**_ 
   - Send a cropped picture of chat log upon new activities
- _**Online Log**_
  -  Send a cropped picture of member inside tribelog every # minutes 
- _**Screen Check**_
  -  Send a full screenshot every # minutes to check the bot screen
- _**Sound Alert**_ 
  - You need to invite [Tempo](https://tempobot.net/) bot into your channel for this feature
  - For this feature the bot will switch to discord window and type to start looping a song in the voice channel the discord bot is currently in so make sure you joined the voice channel before starting the bot and do not close the window to tasktray
  -  On parasaur alert - play a song on parasaur alert
  -  On every # events - play a song when the sum of new events of kill, death, sensor go past the threshold 
  -  Within # minutes - play a song when the sum of new events of kill, death, sensor go past thereshold WITHIN the time frame
- _**Server**_
  - Track server's online status and population 
  - Adjust it to 0 to disable

- __How To Get Your Server's ID On Battlemetric__
  - Google your server name + battlemetric at the end for example
  - "smalltribes14 battlemetric"
  - Click the first link and this will be your Battlemetric server's ID, paste it into the client 

![serverid](https://user-images.githubusercontent.com/12405800/132084285-004bfa6d-6f97-47b1-a21a-2118921344b0.png)

## <a name="note"/> Note
  - Set the default fps to 15 to reduce the stress on your device
  https://steamcommunity.com/sharedfiles/filedetails/?id=786486980
  - Optimize the discord client to not display image attachment
  - Set all graphic on low
  - Use a survivor with Tek Pod unlocked
  - Set gamma to default by typing "gamma" into console, so it wouldn't confuse the bot
  - If you want to run it on a different device, deregister on the old device and register on the new device
  - Set up teamviewer on the bot device and make a text channel with the teamview login info so anyone in your tribe can restart the bot if anything happen
## <a name="faq"/> FAQ
  - *Why is global chat keep getting the same message constantly ?*
  - Turn on chat auto-hide if you have it disabled
  - *Why is the bot keep sending the same events to tribe log constantly ?*
  - Turn off the bot (F1), press Esc to exit tribe log and move the mouse to change the view camera of the character and then start again. This is a bug that I was not be able to fix but it rarely happens due to some pixels of the game on the screen confused the bot
## <a name="changelog"/> Change log
2.7.2
- Changed from SoundFX bot to Tempo bot
- Fixed global chat not sending
- Removed interval dropdownmenu from global chat
- Changed population tracking to send from #tribe-log to #online-log

2.7.1
- Fixed bug where bot "can't find tribe log" when activating discord window
- Fixed bug when script failed to get current UTC and paused the script
- Fixed sound alert within time frame not working
- Changed back to SoundFX because Youtube decided to shutdown Rythm and Groovy
- Change global chat cooldown to 6 seconds
- Changed YoutubeURL field to sound ID
- Changed Start to button instead of hotkey
- Added exit hotkey to quickly terminate the script to use PC resources for emergency like defending base
- Added minutes & second to downtime
- Removed global chat interval, global chat feature now send to discord on new activity

2.7.0
- Added check window active before scanning to prevent script from scanning while sending !play on discord window
- Added Customizable track to play on sound alert using Youtube URL
- Added population to the Server info groupbox
- Added 'Sound Alert' groupbox in GUI that come with
 + Population Alert
 + Sound Alert on events
- Redone Global Chat feature (now only take picture when someone talk on global instead of periodically)
- Moved parasaur alert checkbox to its related Groupbox
- Removed t.maxfps 15 to console after connect to ingame, instead make it default FPS in Engine.ini of ARK file
- Changed from 'SoundFX' to a more reliable bot 'Rythm'
- Improved relog algorithm
