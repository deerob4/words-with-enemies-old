from flask import Flask, render_template, jsonify, request
from getpass import getuser
from random import choice

app = Flask(__name__)

with open('../sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]


def check_dictionary(user_word):
    for word in word_list:
        if word == user_word:
            return True
    else:
        return False


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
    difficulty_map = {'easy': 15, 'medium': 10, 'hard': 6}
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


if __name__ == '__main__':
    app.run(debug=True)