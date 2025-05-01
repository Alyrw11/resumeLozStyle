from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder='templates', static_folder='static')

# === Home page ===
@app.route('/')
def home():
    return render_template('index.html')

# === Individual section pages ===
@app.route('/work')
def work():
    return render_template('work.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/edcerts')
def edcerts():
    return render_template('edCerts.html')

@app.route('/languages')
def languages():
    return render_template('languages.html')

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# === Route to handle user input navigation ===
@app.route('/goto', methods=['POST'])
def goto():
    section = request.form.get('section')
    return redirect(f'/{section}')

if __name__ == '__main__':
    app.run(debug=True)

# === Boss Route ===
@app.route('/bosses')
def bosses():
    return render_template('bosses.html')