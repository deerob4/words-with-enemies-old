from flask import Flask, render_template
from flask.ext.restful import Resource, Api

from random import choice

app = Flask(__name__)
api = Api(app)


with open('sowpods.txt', 'r') as f:
    word_list = [line.lower().replace('\n', '') for line in f]


class RandomLetters(Resource):
    def get(self, n):
        vowels = 'aeiou'
        consonants = 'bcdfghjklmnpqrstvwxyz'
        num_vowels = n // 3
        lettersets = [vowels] * num_vowels + [consonants] * (n - num_vowels)
        return [letter for letterset in lettersets for letter in choice(letterset)]


class Words(Resource):
    def get(self, letters):
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


api.add_resource(RandomLetters, '/letters/<int:n>')
api.add_resource(Words, '/letters/<string:letters>')


if __name__ == '__main__':
    app.run(debug=True)
