from flask import Flask, render_template, jsonify
from app.generate import random_letters
from getpass import getuser

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/_ajax/get_letters', methods=['POST'])
def get_letters():
    print(random_letters(10))
    return jsonify(letters=random_letters(10))


@app.route('/_ajax/get_username', methods=['POST'])
def get_username():
    print(getuser().title())
    return getuser().title()


if __name__ == '__main__':
    app.run(debug=True)