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
3. Pass button

#### Target of dice action 4
1. Give gift to player x message
2. Ok button

#### Dice action 5: Make another player to unwrap a gift
1. Choose gift to be unwrapped (either by player then by gift number, or from the center)
2. Pass button

#### Target of dice action 5:
1. Unwrap gift message
2. Done Unwrapping button

#### Dice Action 6: Steal any gift
1. (If applicable) choose gift to place in middle
2. Gift from middle button
3. Gift from player button
4. Gift number button
5. Pass button

#### Target of dice action 6
1. Give gift to player x message
2. Ok button

### Replenish gift view
1. Choose gift from middle or request handout message
2. Enter gift number button
3. View handouts button (stretch)

### Handout view (stretch):
1. Give handout message
2. choose handout button
3. no thanks button

### Bonus Action View
1. Unwrap Gift (greyed out if impossible)
2. Take a guess (greyed out if impossible)
3. Use a lock (greyed out if impossible)
4. Pass turn

#### Unwrap Gift
1. Choose gift to unwrap
1. Unwrap gift message
2. Done unwrapping button
3. Back button

#### Take a guess
Greyed out if not guessable
1. Guess who brought a gift button
2. Guess which (unwrapped) gift it's linked to
3. Guess the link between the gifts (link and giver must be known)
4. Back button 

#### Guess giver view
1. Choose unwrapped gift to guess on
1. Who brought this gift message
2. display name search view
3. confirm button

#### Guess linked gift view
1. Choose possessed unwrapped gift to guess about
2. Unwrapped Gift search for gift you think is linked
3. confirm button

#### Guess link view
1. Choose possessed unwrapped gift (which has both known attributes)
2. Text box to submit as link guess

#### Target of link guess view
1. Is this guess correct message
2. Guess display box
3. Yes button
4. No button

### Enter Display Name view
1. Search bar for display name. Must have explicit search button that closes keyboard
2. live updating scrollable list below
3. Back button

### Enter Gift number view
1. Big text number box
2. Submit button
3. Back button

### Find gift view
1. Search bar for gift name or number
2. live updateing scollable list
3. back button (if applicable)

### Choose player gift view
1. definable message
2. Gift 1 button
3. Gift 2 button
4. confirm button