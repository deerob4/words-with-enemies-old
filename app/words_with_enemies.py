from flask import Flask, render_template

app = Flask(__name__)

app.config['SECRET_KEY'] = "Q?FVpu)adW>P&4N&E2+ou9>'c"


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)