from flask import Flask, render_template, jsonify, request
from app.generate import random_letters
from getpass import getuser

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/_ajax/random_letters', methods=['POST'])
def get_letters():
    difficulty_map = {'easy': 10, 'medium': 10, 'hard': 6}
    difficulty = request.get_data().decode("utf-8")
    return jsonify(letterset=random_letters(difficulty_map[difficulty]))


@app.route('/_ajax/get_username', methods=['POST'])
def get_username():
    print(getuser().title())
    return getuser().title()


if __name__ == '__main__':
    app.run(debug=True)