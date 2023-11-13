"""
Hangman Tutorial Implementation Step 11

"""

import random, string, re
from words import words
from hangman_visual import lives_visual_dict

word, lives, word_letters = None

def get_valid_word():
    """
    Randomly select a word to use for the game from a predefined list of words.
    Keep choosing a word randomly until we find a word that contains only letters (no numbers or other symbols)
    """
    word = random.choice(words)
    while re.search("[^A-Za-z]", word):           
        word = random.choice(words)
    return word

def print_scored_word(word, used_letters):
    """
    Prints the guessed word to the console.

    Only the letters that the user correctly guessed will be visible. 
    The other letters of the word are replaced with underscores ("_")
    
    :param word:            the word that the user is guessing.
    :param used_letters:    the letters thet the user has already guessed
    """
    for letter in word:
        if letter in used_letters:
            print(letter, end=" ")
        else:
            print("_", end=" ")
    print("")

def run_game_loop():
    """
    The Hang Man Game Loop.

    The code in this function will repeat as long as the player has 
    lives remaining and the player has not guessed the letters of the
    word correctly.
    """

    global word
    global lives
    global word_letters

    used_letters = set()                        # A collection of every letter that the user has guessed during the game (correct or not)
    alphabet = set(string.ascii_uppercase)      # A collection of every valid letter that the user could guess during the game (all uppercase, without numbers or symbols)

    # Start the game, and keep it going as long as the player has not run out of lives,
    # and the user has not guessed the word correctly.
    while lives > 0 and len(word_letters) > 0:
        # Display the current number of lives so far, along with a number of blank lines
        # corresponding to the randomly-selected word (e.g. four underscores "_ _ _ _ " for the word "SWEET",
        # or eight underscores "_ _ _ _ _ _ _" for the word "GORGEOUS"
        print(lives_visual_dict[lives]);
        print("You have ", str(lives), " lives left and you have used these letters: ")
        print("Current word: ", end="")

        print_scored_word(word, used_letters)

        # Ask the user to guess a letter, and then check if that letter is in 
        # the word that was randomly selected. 
        user_letter = input('Guess a letter: ').upper()

        # Proceed IF AND ONLY IF the user typed a letter (not a number, space, or symbol character.)
        if user_letter in alphabet:

            # Add the user's guessed letter to the list of used letters.
            used_letters.add(user_letter)

            # If the letter that the user entered has been guessed already,
            # then let the user know.
            if user_letter in used_letters:
                print('\nYou have already used that letter. Guess another letter.\n\n')

            # If the letter that the user guessed is not in the word, then the user
            # guessed the incorrect letter.
            elif user_letter not in word_letters:
                print('\nYour letter,', user_letter, 'is not in the word.')

                # Subtract one from the lives so that the game does not run infinitely.
                lives = lives - 1 # (same as lives -= 1)
            
            # If the letter that the user guessed IS in the word, then the user
            # guessed correctly
            else:
                # Remove the letter that the user has guessed from the 
                # list of word letters
                word_letters.remove(user_letter)
                
                # Print two empty lines to the screen to make the next set of text easier to read.
                print("\n\n")
        # If the user typed anything other than a letter (a number, symbol, space, or empty string),
        # then tell the user that the input is not correct!
        else:
            print('\nThat is not a valid letter.\n\n')

def end_game(word, word_letters, lives):
    """
    Prints end-of-game text to the console based on the results of the game.

    :param word:                the word that the user is guessing
    :param word_letters:        the letters of the word that the user has NOT guessed
    :param lives:               the number of remaining lives when the game ended
    """

    # If the game ends because the user guesses the word correctly, then display
    # a successful message.
    if lives > 0 and len(word_letters) == 0:
        print('YAY! You guessed the word', word, '!!')

    # If the game ends because the user runs out of lives before forming the correct word, then
    # show a "Game Over" message.
    else:
        print("You died, sorry! The correct word was", word)


word = get_valid_word()
word_letters = list(word)                   # List of letters in the selected word
lives = 9                                   # The number of lives
run_game_loop(word, lives, word_letters)
end_game(word, word_letters, lives)