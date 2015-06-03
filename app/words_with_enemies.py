from flask import Flask, send_from_directory, request, jsonify
from flask.ext.restful import Resource, Api

from random import choice

app = Flask(__name__)
api = Api(app)

# Sets the word_list variable to a lowercase list of all the words in sowpods.txt
with open('static/sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]


@app.route('/')
def index():
    return send_from_directory('static', 'index.html')


@app.route('/api/letters')
def random_letters():
    n = int(request.args.get('quantity'))
    vowels = 'aeiou'
    consonants = 'bcdfghjklmnpqrstvwxyz'
    num_vowels = n // 3

    # Constructs a list containing a fair set of the vowel string and consonants string, with a bias towards consanants.
    lettersets = [vowels] * num_vowels + [consonants] * (n - num_vowels)

    # Returns a list of random choices from the above.
    return jsonify({'letters': [letter for letterset in lettersets for letter in choice(letterset)]})


@app.route('/api/words')
def find_words():
    """Creates a list of possible words out a list of letters.

    This is a fairly basic linear search algorithm that goes through each 
    word in the list, and compares each letter in the word against the letters 
    in the given list. If the letter is found, it is taken away from the word; 
    therefore, if, once all the letters have been checked, the length of the
    word is 0, the word must be possible to make out of the letters, so it is added 
    to the list of found words.
    """
    letters = request.args.get('letters')

    found_words = []
    for word in word_list:
        word_as_list = list(word)
        for letter in letters:
            if letter in word_as_list:
                word_as_list.remove(letter)
        if len(word_as_list) == 0:
            found_words.append(word)

    return jsonify({'words': sorted(found_words, key=len), 'length': len(found_words)})


if __name__ == '__main__':
    app.run(debug=True)
