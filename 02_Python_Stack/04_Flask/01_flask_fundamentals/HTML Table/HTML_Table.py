from flask import Flask, render_template
app = Flask(__name__)




students = [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'John', 'last_name' : 'Supsupin'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'},
    {'first_name' : 'John', 'last_name' : 'Pike'},
    {'first_name' : 'TuPac', 'last_name' : 'Shakur'},
    {'first_name' : 'Ronald', 'last_name' : 'McDonald'},
    {'first_name' : 'Ayn', 'last_name' : 'Rand'},
    {'first_name' : 'Joe', 'last_name' : 'Mama'},
    {'first_name' : 'Dog', 'last_name' : 'TheBountyHunter'},
    {'first_name' : 'Bozo', 'last_name' : 'TheClown'},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},
    {'first_name' : '', 'last_name' : ''},

    ]
@app.route('/lists')
def render_lists():    
    return render_template('lists.html', First = 'first_name' , Last =  'last_name', Full = 'first_name' + 'last_name', students = students)












if __name__ == '__main__':   
    app.run(debug=True)    
