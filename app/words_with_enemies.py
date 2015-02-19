from flask import Flask, render_template, jsonify, request
from getpass import getuser
from random import choice
from math import ceil

app = Flask(__name__)

with open('../sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]


def check_dictionary(user_word):
    for word in word_list:
        if word == user_word:
            return True
    else:
        return False


def generate_words(letters, difficulty):
    found_words = []
    for word in word_list:
        word_as_list = list(word)
        for letter in letters:
            if letter in word_as_list:
                word_as_list.remove(letter)
        if len(word_as_list) == 0:
            if difficulty != 'easy':
                if len(word) > 4:
                    found_words.append(word)
            else:
                if len(word) > 3:
                    found_words.append(word)
    print('AI letters were:', ''.join(letters))
    print('Possible words were:', ' '.join(found_words))
    return found_words


def random_letters(n):
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    num_vowels = n // 3
    lettersets = [vowels] * num_vowels + [consonants] * (n - num_vowels)
    return [letter for letterset in lettersets for letter in choice(letterset)]


@app.route('/')
def index():
    return render_template('index.html', username=getuser().title())


@app.route('/_ajax/random_letters', methods=['POST'])
def get_letters():
    difficulty_map = {'easy': 12, 'medium': 10, 'hard': 8}
    difficulty = request.get_data().decode("utf-8")
    return jsonify(letterset=random_letters(difficulty_map[difficulty]))


@app.route('/_ajax/check_dictionary', methods=['POST'])
def check_dictionary():
    user_word = request.get_data().decode("utf-8").replace(',', '')
    print(user_word)
    for word in word_list:
        if word == user_word:
            return 'valid'
    else:
        return 'invalid'


@app.route('/_ajax/generate_computer_word', methods=['POST'])
def generate_computer_word():
    difficulty_map = {'easy': 8, 'medium': 10, 'hard': 12}
    difficulty = request.get_data().decode("utf-8")
    letters = random_letters(difficulty_map[difficulty])
    words = generate_words(letters, difficulty)
    if difficulty == "easy":
        return min(words, key=len)
    elif difficulty == "medium":
        return words[ceil(len(words) / 2)]
    else:
        return max(words, key=len)


if __name__ == '__main__':
    app.run(debug=True)