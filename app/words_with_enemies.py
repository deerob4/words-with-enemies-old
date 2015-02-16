from flask import Flask, render_template, jsonify, request
from app.generate import random_letters
from getpass import getuser

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', username=getuser().title())


@app.route('/_ajax/random_letters', methods=['POST'])
def get_letters():
    difficulty_map = {'easy': 15, 'medium': 10, 'hard': 6}
    difficulty = request.get_data().decode("utf-8")
    return jsonify(letterset=random_letters(difficulty_map[difficulty]))


if __name__ == '__main__':
    app.run(debug=True)