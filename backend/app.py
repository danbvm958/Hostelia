from flask import Flask, request, jsonify
from flask_cors import CORS
from signup import signupUser


app = Flask(__name__)
CORS(app)

@app.route('/signup', methods=['POST'])
def Signup():
    data = request.get_json()
    signupUser(data)
    return jsonify({"message": "Compte crée"}), 200


if __name__ == '__main__':
    app.run(debug=True)