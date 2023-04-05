import os
from flask import Flask, request, jsonify

app = Flask(__name__)

# Define the route for the main page
@app.route('/')
def home():
    return "Welcome to SlickBot!"

# Define the route for receiving the POST request from the form
@app.route('/send', methods=['POST'])
def send():
    # Get the form data
    to_number = request.form.get('to_number')
    message = request.form.get('message')

    # Code to send the voicemail message using Twilio API

    # Return a success message
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run()
