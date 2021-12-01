# Ark Tracker / LogBot+ Discord Bot
#### Use to interact with LogBot+ so you can use discord command to mute/unmute logbot notification and turn on/off sound alert.
#### Also track various things in Ark like baby gestation, baby imprint, tek forcefield, tek generator.
___
__LogBot commands__
- __/logbot__
  - __mute__ - Turn off ALL notifications from logbot for 10 minutes
    - Good for when claiming babies
  - __unmute__ - Turn on logbot notification
  - __soundoff__ - Turn off sound alert of logbot
    - Sound alert feature need to turn it on from client first and soundoff will override logbot client setting
  - __soundon__ - Turn on logbot sound alert
  - __global__ `message` - Chat on global from your logbot
    - Show your presence on the server and good to use as a scare tactic because most people wouldn't raid when they know you're actively playing and not streaming log.
  - __global__ `message` - Chat in tribe from your logbot
___
__Tek Generator commands__
  - __/tekgen__
    - __list__ - Display list of tek generators
    - __add__ `name` `element` - type in name and the amount of element you put in
    - __delete__ `id`- Get the id from low fuel alert or from list
    - __reset__ `id` `element` - reset the amount of element for the tek generator
    - __help__ - Show tekgen help

*Will alert you when the tek generators fuel is less than 24 hours on every 4 hours*

__*This will only work for max radius*__

*Example:*
  - `/tekgen add Tower_1 1000`
    - Start tracking tek generator of tower 1 with 1000 elements using fuel consumption of max radius
  - `/tekgen add Tower_2 1000`
    - Start tracking tek generator of tower 2 with 1000 elements using fuel consumption of max radius
___
__Forcefield command__
- __/forcefield__
  - __list__ - Display list of tek forcefields
  - __add__ `name` `element` `radius`- type in name and the amount of element you put in and the radius of the tek frocefield
  - If your radius is 2.6, enter it as 3 and so on.
  - Because things aren't exact it just suppose to tell you when fuel is running low so it's better to use a larger radius
  - __delete__ `id`- Get the id from low fuel alert or from list
  - __reset__ `id` `element` - reset the amount of element for the tek forcefield
  - __help__ - Show forcefield help

*Will alert you when the tek generators fuel is less than 24 hours on every 4 hours*

*Example:*
  - `/forcefield add Tower_1 1000 3`
    - Start tracking tek forcefield of tower 1 with `1000` elements using fuel consumption of radius `3`
  - `/forcefield add Tower_2 1000 6`
    - Start tracking tek generator of tower 2 with 1000 elements using fuel consumption of radius `6`
___
__Baby command__
  - __/baby__ `name` `hour` `minute`
    - Example:
      - /baby Racer 4h 30m
      - /baby Mana 1h
      - /baby Thyla 50m
  - __/baby__ imp`name` `hour` `minute`
or
  - __/baby__ `commands`
    - __list__ - Display list of baby timers
    - __delete__ - Delete a baby timer by ID
