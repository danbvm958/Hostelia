import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from db import db_connection
from werkzeug.security import generate_password_hash

def signupUser(data : dict):
    connection = db_connection()
    cur = connection.cursor()
    sql = "INSERT INTO user (email, name, familyName, birthdate, password) VALUES (%s, %s, %s, %s, %s)"
    password = generate_password_hash(data['Password'])
    values = (
        data['Mail'], 
        data['Name'], 
        data['FamilyName'], 
        data['Birthdate'], 
        password
    )

    cur.execute(sql, values)
    connection.commit()
    cur.close()
    connection.close()