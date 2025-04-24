from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder='html', statickt_folder='static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/goto', methods=['POST'])
def goto():
    section = request.form.get('section')
    return redirect(f'/{section}')

if __name__ == '__main__':
    app.run(debug=True)
