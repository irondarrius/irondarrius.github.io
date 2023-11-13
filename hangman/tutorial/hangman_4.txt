"""
Hangman Tutorial Implementation Step 4

"""

import random

# Randomly select a word to use for the game from a predefined list of words.
words = ["SWEET","BATHE","TRAVEL","TART","ZINC","SOUND","GORGEOUS","BUMPY","MARK","GOVERNMENT","PREPARE"]
word = random.choice(words)


lives = 9                       # The number of lives

# Start the game, and keep it going as long as the player has not run out of lives.
while lives > 0:
    # Display the current number of lives so far, along with a number of blank lines
    # corresponding to the randomly-selected word (e.g. four underscores "_ _ _ _ " for the word "SWEET",
    # or eight underscores "_ _ _ _ _ _ _" for the word "GORGEOUS"

    print("You have", str(lives), " lives left and you have used these letters: ")
    print("Current word: ", end="")
    for letter in word:
        print("_", end=" ")
    print("")


    # Ask the user to guess a letter, and then check if that letter is in 
    # the word that was randomly selected. 
    user_letter = input('Guess a letter: ').upper()

    # If the letter that the user guessed is not in the word, then the user
    # guessed the incorrect letter.
    if user_letter not in word:
        print('\nYour letter, ', user_letter, ' is not in the word.')

        # Subtract one from the lives so that the game does not run infinitely.
        lives = lives - 1 # (same as lives -= 1)
        



