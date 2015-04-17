from flask import Flask, render_template
from flask.ext.restful import Resource, Api

from random import choice

app = Flask(__name__)
api = Api(app)

# Sets the word_list variable to a lowercase list of all the words in sowpods.txt
with open('sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]


class RandomLetters(Resource):
    def post(self, n):
        vowels = 'aeiou'
        consonants = 'bcdfghjklmnpqrstvwxyz'
        num_vowels = n // 3

        # Constructs a list containing a fair set of the vowel string and consonants string, with a bias towards consanants.
        lettersets = [vowels] * num_vowels + [consonants] * (n - num_vowels)

        # Returns a list of random choices from the above.
        return [letter for letterset in lettersets for letter in choice(letterset)]


class Words(Resource):
    def post(self, letters):
        """Creates a list of possible words out a list of letters

        This is a fairly basic linear search algorithm that goes
        through each word in the list, and compares each letter
        in the word against the letters in the given list. If the
        letter is found, it is taken away from the word; therefore,
        if, once all the letters have been checked, the length of the
        word is 0, the word must be possible to make out of the letters,
        so it is added to the list of found words.
        """
        found_words = []
        for word in word_list:
            word_as_list = list(word)

            for letter in letters:
                if letter in word_as_list:
                    word_as_list.remove(letter)
            if len(word_as_list) == 0:
                found_words.append(word)

        return {'words': sorted(found_words, key=len), 'length': len(found_words)}


@app.route('/')
def index():
    return render_template('index.html')


# Sets the API endpoints. TODO make a decent API that follows REST principles rather than this shabby mess.
api.add_resource(RandomLetters, '/letters/<int:n>')
api.add_resource(Words, '/letters/<string:letters>')


if __name__ == '__main__':
    app.run(debug=True)
