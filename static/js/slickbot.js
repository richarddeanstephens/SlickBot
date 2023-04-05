/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styles */
body {
  background-color: #333;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

/* Form styles */
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

form label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

form input[type="text"], form select {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #444;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
}

form button[type="submit"] {
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #0077cc;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

form button[type="submit"]:hover {
  background-color: #005ea6;
}

/* Audio file list styles */
#audio-file-list {
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  list-style: none;
}

#audio-file-list li {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

#audio-file-list li a {
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

#audio-file-list li a:hover {
  color: #0077cc;
}
