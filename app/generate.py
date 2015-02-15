from string import ascii_lowercase
from random import randint, choice
from getpass import getuser

with open('sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]

username = getuser().title()
user_map = {'easy': 12, 'medium': 8, 'hard': 6}
ai_map = {'easy': 6, 'medium': 12, 'hard': 15}


def setup():
    print('\nWords with Enemies\n' + '-' * 18)
    print('Welcome, {0}. Please choose easy, medium or hard:'.format(username))
    while True:
        difficulty = input('> ').lower()
        if difficulty in ['easy', 'medium', 'hard']:
            break
        print('\nPlease enter easy, medium or hard.')
    print('{0} it is, then. En garde!'.format(difficulty.title()))

    game(difficulty)


def game(difficulty):
    current_round = 1
    user_score = 0
    ai_score = 0

    while current_round < 6:
        user_letters = random_letters(user_map[difficulty])

        print('\nRound {0} -- Your points: {1} -- Computer\'s points: {2}\n'.format(current_round, user_score,
                                                                                    ai_score) + '=' * 50)
        print('Your letters: {0}'.format(' '.join(user_letters)))

        # Checks that the word can be made using the letters
        while True:
            user_word = input('Enter a word: ')
            for letter in user_word:
                if letter not in user_letters:
                    print('\nSorry, but you can\'t spell \'{0}\' with those letters. Try again!\n'.format(user_word))
                    break
            else:
                real_word = check_dictionary(user_word)
                if real_word:
                    break
                print('\nSorry, but \'{0}\' is not a real word!\n'.format(user_word))

        ai_word = ai_move(difficulty)

        print('AI selects {0}'.format(ai_word))

        decider = calculate_score(ai_word, user_word)

        ai_calculated = len(decider[1])
        user_calculated = len(decider[0])

        if ai_calculated > user_calculated:
            print('\n{0} vs {1} - AI wins'.format(user_word, ai_word))
        elif ai_calculated == user_calculated:
            print('Both words have {0} letters left over - i\'ts a tie!'.format(ai_calculated))
        else:
            print('\n{0} vs {1} - {2} wins'.format(user_word, ai_word, username))

        print(decider[0], decider[1])

        ai_score += ai_calculated
        user_score += user_calculated

        print('\nYou had {0} letters left over - you score {0} points.'.format(user_calculated))
        print('AI had {0} letters left over - AI scores {0} points.'.format(ai_calculated))

        current_round += 1

    if user_score > ai_score:
        print(
            '=' * 50 + '\nWell, look at that! {0}, you won the game with {1} points - congratulations!'.format(username,
                                                                                                               user_score))
    elif ai_score > user_score:
        print('=' * 50 + '\nOoh, bad luck - the computer won with {0} points. Better luck next time!'.format(ai_score))
    else:
        print(
            '=' * 50 + '\nRustle my palm tree, would you look at that? It\'s a tie - you both have {0} points!'.format(
                user_score))

    print('\nFinal Rundown:\nAI scored {0}\n{1} scored {2}\n'.format(ai_score, username, user_score))


def ai_move(difficulty):
    ai_letters = random_letters(ai_map[difficulty])
    created_word = False

    # Easy mode simply picks the first word it finds that meets the criteria. It is as stupid as a stunted armadillo.
    if difficulty == 'easy':
        while not created_word:
            word = list(choice(word_list))
            for letter in word:
                if letter not in ai_letters:
                    break
            else:
                ai_word = ''.join(word)
                break
        return ai_word

    # Hard and medium generate all the possible words. Hard picks the longest, whilst medium picks 3rd - 10th longest.
    else:
        possible_words = []
        for word in word_list:
            for letter in word:
                if letter not in ai_letters:
                    break
            else:
                possible_words.append(''.join(word))
        possible_words = sorted(possible_words, key=len, reverse=True)

        if difficulty == 'medium':
            return possible_words[randint(3, 10)]
        return possible_words[0]


# possible_words = [''.join(word) for word in word_list for letter in word if letter in ai_letters]
def calculate_score(user_word, ai_word):
    for letter in user_word + ai_word:
        if letter in ai_word and letter in user_word:
            user_word, ai_word = user_word.replace(letter, '', 1), ai_word.replace(letter, '', 1)
    return [ai_word, user_word]


# Checks that the word is in the dictionary
def check_dictionary(user_word):
    for word in word_list:
        if word == user_word:
            return True
    else:
        return False


# Returns a list of random letters
def random_letters(n):
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    num_vowels = n // 3
    lettersets = [vowels] * num_vowels + [consonants] * (n - num_vowels)
    return [letter for letterset in lettersets for letter in choice(letterset)]


setup()