from flask import Flask, render_template, jsonify
from app.generate import random_letters

app = Flask(__name__)

app.config['SECRET_KEY'] = "Q?FVpu)adW>P&4N&E2+ou9>'c"


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/_ajax/get_letters', methods=['POST'])
def get_letters():
    print(random_letters(10))
    return jsonify(letters=random_letters(10))


if __name__ == '__main__':
    app.run(debug=True)