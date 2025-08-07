from db import db_connection
import _mysql_connector

def signupUser(data : dict):
    connection = db_connection()
    cur = connection.cursor()
    sql = "INSERT INTO user (email, name, familyName, birthdate, password) VALUES (%s, %s, %s, %s, %s)"
    values = (
        data['Mail'], 
        data['Name'], 
        data['FamilyName'], 
        data['Birthdate'], 
        data['Password']
    )

    cur.execute(sql, values)
    connection.commit()
    cur.close()
    connection.close()