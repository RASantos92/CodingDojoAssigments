from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = "123456"
# our index route will handle rendering our form


@app.route('/')
def index():    
    return render_template("index.html")


@app.route('/users', methods=['POST'])
def create_user():
    print("*"*75)
    print("*"*75)
    print("Got the Posted Info. THANKS!!!")
    print(request.form)
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    print(f"Name submitted: {request.form['name']}")
    print(f"Email submitted: {request.form['email']}")
    print("*"*75)
    print("*"*75)
    name_from_form = request.form['name']
    email_from_form = request.form['email']
    return redirect("/show")


@app.route("/show")
def show_user():
    print("*"*75)
    print("*"*75)
    print(app.secret_key)
    print("Showing User info submitted on Form:")
    print(request.form)
    print("*"*75)
    print("*"*75)
    return render_template ("show.html", name=session['name'], em=session['email'])




# name=request.form[["name"], em=request.form["email"]









if __name__ == "__main__":
    app.run(debug=True)
