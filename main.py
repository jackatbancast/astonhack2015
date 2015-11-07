from flask import Flask
# from flask import request
from flask import render_template

app = Flask('astonhack', static_folder='assets')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/admin')
def admin():
    return render_template('admin.html')

if __name__ == "__main__":
    app.run()
