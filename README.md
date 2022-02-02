# Learn React with Wordle

## Changing the tenzies project into wordle

### Winning and Losing
If all the letters are correct (green) the game is won
If you fill all the rows without guessing the word the game is list

### Changes to Die 
[x] Die class should be a letter input instead
When submitted letter style should change based on if the position or the word is in the right spot
[x] Letters don't need to be clicked on
[x] The grid should be 6 rows long and 5 letter across
[x]  - Each square is made from a square object {letter: a, color: white}
[x]  - Each row is a row object with 5 square objects {squares: [], letters, player}
[x]  - Row gives each square object a character prop (could be empty) from letters
[x]  - Row has a player flag which takes player input from Keyboard.
 - When a player submits a word and the player does not win the player flag goes to the next row. 
Your previously submitted words each fill up one row

### Changes to input
[x] No need for a roll button
[x] A keyboard is shown for you to type on
When you click on a letter it shows up in your current guess
The keyboard has a back button to remove letters from your guess
The keyboard has an enter button to submit your guess
The style of the keyboard changes which matches the letter style 
Each time a word is submitted letters that are in the correct spot are green and letters in the word are yellow
Words submitted must be in the english dictionary