from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/profiles', methods=['GET'])
def get_profiles():
    profiles = [
        {
            "login": {"uuid": "1"},
            "name": {"first": "John", "last": "Doe"},
            "email": "john.doe@example.com",
            "location": {"city": "New York", "country": "USA"},
            "picture": {"large": "https://randomuser.me/api/portraits/men/1.jpg"}
        },
        {
            "login": {"uuid": "2"},
            "name": {"first": "Jane", "last": "Doe"},
            "email": "jane.doe@example.com",
            "location": {"city": "Los Angeles", "country": "USA"},
            "picture": {"large": "https://randomuser.me/api/portraits/women/2.jpg"}
        }
    ]
    return jsonify(profiles)

if __name__ == '__main__':
    app.run(debug=True)
