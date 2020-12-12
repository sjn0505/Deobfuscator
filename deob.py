import os
from flask import Flask,render_template,url_for,request,redirect,flash,session,jsonify
from wtforms import SubmitField

app=Flask(__name__)

SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY']=SECRET_KEY



@app.route("/", methods=["GET","POST"])
def home():
	if request.method == 'POST':
		#print(request.form)
		#check which button is clicked and redirect to the page
		
		#print(request.form)
		code = request.form['code']
		return jsonify(x = code)
		

	return render_template('deobfuscator.html')


	



if __name__ == '__main__':
	app.run(debug=True)
