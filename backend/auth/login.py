import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from db import db_connection
from werkzeug.security import check_password_hash
from flask import session, jsonify

def loginUser(email,password):
    connection = db_connection()
    cur = connection.cursor(dictionary=True)
    sql = f"SELECT * FROM user WHERE email=%s;"
    cur.execute(sql, (email,))
    result = cur.fetchone()
    cur.close()
    connection.close()
    if result == [] :
        return jsonify({"message": "Utilisateur inexistant"})
    
    elif check_password_hash(result['password'],password) == False:
        return jsonify({"message": "Utilisateur ou mot de passe incorect"})
    else:
        session['userID'] = result["id"]
        return jsonify({"message": "Connexion établie"})

