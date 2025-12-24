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



### Enter Display Name view
1. Search bar for display name. Must have explicit search button that closes keyboard
2. live updating scrollable list below
3. Back button

### Enter Gift number view
1. Big text number box
2. Submit button
3. Back button