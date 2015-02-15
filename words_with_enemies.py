from string import ascii_lowercase
from random import randint, choice

with open('sowpods.txt', 'r') as f:
		word_list = [line.lower().replace('\n', '') for line in f]

def setup():
	print('\nWords with Enemies\n' + '-'*18)
	print('Welcome. Please select a difficulty mode:\n1. Easy\n2. Medium\n3. Hard')
	while True:
		difficulty = input('=> ')
		if difficulty in ['easy', 'medium', 'hard', '1', '2', '3']:
			break
		print('\nPlease enter easy, medium or hard.')
	print('{0} it is, then. En garde!'.format(difficulty.title()))
	game(difficulty)


def game(difficulty):
	current_round = 1
	user_score = 0
	computer_score = 0
	while current_round < 6:
		user_letters = [choice(list(ascii_lowercase)) for x in range(randint(8, 12))]

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
				print('\nSorry, but \'{0}\' is not a real word!\n'.format(user_word))

		ai_word = ai_move(difficulty)

		print('You selected: {0}\nAI selected: {1}'.format(user_word, ai_word))	

		current_round += 1


def ai_move(difficulty):
	ai_letters = [choice(list(ascii_lowercase)) for x in range(randint(8, 12))]
	created_word = False

	print('\nAI letters: {0}'.format(' '.join(ai_letters)))

	if difficulty == 'easy' or difficulty == '1':
		while not created_word:
			word = list(choice(word_list))
			for letter in word:
				if letter not in ai_letters:
					break
			else:
				ai_word = ''.join(word)
				break
		return ai_word

	elif difficulty == 'medium' or difficulty == '2':
		possible_words = []
		for word in word_list:
			for letter in word:
				if letter not in ai_letters:
					break
			else:
				possible_words.append(''.join(word))
		possible_words = sorted(possible_words, key=len, reverse=True)

		return possible_words[randint(3, 10)]


# possible_words = [''.join(word) for word in word_list for letter in word if letter in ai_letters]

# Checks that the word is in the dictionary
def check_dictionary(user_word):
	for word in word_list:
		if word == user_word:
			return True
	else:
		return False

setup()