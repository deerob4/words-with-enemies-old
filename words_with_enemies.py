from string import ascii_lowercase
from random import randint, choice

def setup():
	print('\nWords with Enemies\n' + '-'*18)
	print('Welcome. Please select a difficulty mode:\n1. Easy\n2. Medium\n3. Hard')
	while True:
		difficulty = input('=> ')
		if difficulty in ['easy', 'medium', 'hard']:
			break
		print('\nPlease enter easy, medium or hard.')
	print('{0} it is, then. En garde!'.format(difficulty.title()))
	game(difficulty)


def game(difficulty):
	current_round = 1
	user_score = 0
	computer_score = 0
	while current_round < 6:
		user_letters = [choice(list(ascii_lowercase)) for x in range(randint(8, 15))]

		print('\nRound {0} -- Your points: {1} -- Computer\'s points: {2}\n'.format(current_round, user_score, computer_score) + '-'*50)
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
					print('Yes - {0} is a word!'.format(user_word))
					break
				print('{0} is not a real word!'.format(user_word))

		points = 
		current_round += 1


# Checks that the word is in the dictionary
def check_dictionary(user_word):
	with open('wordlist.txt', 'r') as f:
		word_list = [line.replace('\n', '') for line in f]
	for word in word_list:
		if word == user_word:
			return True
	else:
		return False

setup()