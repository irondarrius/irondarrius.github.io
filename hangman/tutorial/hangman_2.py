"""
Hangman Tutorial Implementation Step 2

"""

import random

# Randomly select a word to use for the game from a predefined list of words.
words = ["SWEET","BATHE","TRAVEL","TART","ZINC","SOUND","GORGEOUS","BUMPY","MARK","GOVERNMENT","PREPARE"]
word = random.choice(words)


# Display the current number of lives so far, along with a number of blank lines
# corresponding to the randomly-selected word (e.g. four underscores "_ _ _ _ " for the word "SWEET",
# or eight underscores "_ _ _ _ _ _ _" for the word "GORGEOUS"

print("You have 9 lives left and you have used these letters: ")
print("Current word: ", end="")
for letter in word:
    print("_", end=" ")
print("")