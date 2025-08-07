from flask import Flask, request, jsonify, session
from flask_cors import CORS
from auth.signup import signupUser
from auth.login import loginUser
from auth.check import checkUser


app = Flask(__name__)
app.secret_key= "test_secret_key"
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])

@app.route('/auth/signup', methods=['POST'])
def Signup():
    data = request.get_json()
    signupUser(data)
    return jsonify({"message": "Compte crée"})

@app.route('/auth/login', methods=['POST'])
def Login():
    data = request.get_json()
    return loginUser(data['Mail'],data["Password"])
    
    
@app.route('/auth/check', methods=['GET'])
def Check():
    return checkUser()

@app.route('/auth/logout', methods=['POST'])
def Logout():
    session.clear()
    return jsonify({"message": "Déconnexion réussie"})

if __name__ == '__main__':
    app.run(debug=True)