# Learn React with Wordle

## Changing the tenzies project into wordle

### Winning and Losing
- [x] If all the letters are correct (green) the game is won
- [x] If you win the game a screen says you won and a new game can be started. 
- [x] If you fill all the rows without guessing the word the game is lost
- [x] A new game can be started if you lose the game. 

### Changes to Die 
- [x] Die class should be a letter input instead
- [x] When submitted letter style should change based on if the position or the word is in the right spot
- [x] Letters don't need to be clicked on
- [x] The grid should be 6 rows long and 5 letter across
- [x] - Each square is made from a square object {letter: a, color: white}
- [x] - Each row is a row object with 5 square objects {squares: [], letters, player}
- [x] - Row gives each square object a character prop (could be empty) from letters
- [x] - Row has a player flag which takes player input from Keyboard.
- [x] - When a player submits a word and does not win the player flag goes to the next row. 
- [x] Your previously submitted words each fill up one row

### Changes to input
- [x] No need for a roll button
- [x] A keyboard is shown for you to type on
- [x] When you click on a letter it shows up in your current guess
- [x] The keyboard has a back button 
- [x] The back button removes letters from your guess
- [x] The keyboard has an enter button
- [x] The enter button submits your guess
- [x] Words submitted must be in the english dictionary
- [x] Words that are not in the dictionary will show up as red and cannot be submitted
- [ ] Red styling will be reset when you press any button on the keyboard
- [x] The style of the keyboard changes which matches the letter style, or grey if the letter was guessed but not in the word.
- [x] Each time a word is submitted letters that are in the correct spot are green and letters in the word are yellow
- [ ] For words with multiple of the same letter, yellow and green letters matches the number of letters in the word.
        ex.  STALE, guessed TRAIL, 1 yellow L. guessed ALELE,  1 green L. Should not be 1 yellow 1 green L. 
