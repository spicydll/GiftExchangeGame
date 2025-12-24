# Game Flows

## Unauthenticated

- User Registration
- Returning login
- TV Display Mode

### User Registration
1. Enter Display Name, pin, and Room code
2. Register Gift 1
3. Register Gift 2
4. Register chosen link
5. Retrieve Gift Numbers

Token saved for authentication -> Authenticated User

### Returning Login
Only needed if using a different device than registration.

1. Enter Display Name and pin
2. Choose room

Token saved -> authenticated

### TV Display Mode
1. Enter room code

TV Token saved -> TV mode

## Authenticated User
- Edit gifts (stretch)
- Edit Username/pin (stretch)
- Join game (if active)
- Reveal Gift numbers
- Logout

## Active Game
### Always visible:
1. Display Name (at top)
2. Reveal Gift numbers button (bottom or top?)
3. Guess Score
4. Current lock items

### Pregame Idle
1. Awaiting host message

### Initial Grab
1. Grab first gift message
2. Enter gift number buttton
3. Remind me of my numbers button (?)

### Sitting Order Determination
1. Identify person sitting to right message
2. Enter Gift number button -> Gift Number view
3. Enter Display Name button -> Display Name view

### Game Idle
1. Awaiting turn message

### Your turn
1. Show my gift numbers button
2. Roll Dice button

### Dice Roll Action view
1. Dice value rolled image and value
2. Action Message
3. Menu buttons for dice action

#### Dice action 1: Forced Steal/trade with middle
1. If no gifts remain, dice action is passed
2. (If applicable) Choose Gift to put in middle
3. Enter gift name/number of gift taken from middle (If gifts remain)

#### Dice action 2/3: Force trade with Left/Right (Turn Player)
1. Select gift to give
2. Confirm

#### Target of dice action 2/3
1. Select gift to give
2. Confirm

#### Dice action 4: Power trade with any player
1. Choose Gift to receive (by player, gift name, or gift number)
2. Choose Gift to give

#### Target of dice action 4
1. Give gift to player x message

### Bonus Action View
1. Unwrap Gift (greyed out if impossible)
2. Take a guess (greyed out if impossible)
3. Use a lock (greyed out if impossible)
4. Pass turn

### Enter Display Name view
1. Search bar for display name. Must have explicit search button that closes keyboard
2. live updating scrollable list below
3. Back button

### Enter Gift number view
1. Big text number box
2. Submit button
3. Back button