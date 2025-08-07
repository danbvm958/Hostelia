from flask import session,jsonify

def checkUser():
    user = session.get("userID")
    if user == None:
        return jsonify({"connected" : 'False'})
    else : 
        return jsonify({"connected" : "True", "userID" : user })
