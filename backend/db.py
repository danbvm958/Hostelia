import mysql.connector

db_config = {
    'host' : 'localhost',
    'user' : 'root',
    'password' : '*D1a2n395800',
    'database' : 'hostelia'
}

def db_connection():
    connection = mysql.connector.connect(**db_config)
    return connection