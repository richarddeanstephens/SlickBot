SlickBot
SlickBot is a Python-based ringless voicemail system that allows users to send voicemail messages to a list of recipients without their phones ringing. The system is built using Flask web framework, Twilio API, and SQLite database.

Installation

Clone the repository to your local machine.
Install Python 3.6 or higher.
Install required dependencies using pip:
Copy code
pip install -r requirements.txt
Usage
Start the Flask server by running:
Copy code
python slickbot.py
Open your web browser and navigate to http://localhost:5000.
Fill out the form to send a ringless voicemail message.
Check the status of your voicemail in the dashboard.

Configuration

SlickBot requires the following environment variables to be set:

TWILIO_ACCOUNT_SID: Your Twilio account SID.
TWILIO_AUTH_TOKEN: Your Twilio account auth token.
TWILIO_PHONE_NUMBER: Your Twilio phone number.
SLICKBOT_DB: The path to your SQLite database file.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
SlickBot was created with the help of the following resources:

Flask documentation
Twilio documentation
SQLite documentation

Contributors
Anonymous - Project creator and maintainer.
