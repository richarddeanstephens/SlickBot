//Fetch the list of audio files from the Google Sheet and add them to the dropdown
function loadAudioFiles() {
  const url = "https://script.google.com/macros/s/<SCRIPT ID>/exec?action=getFiles"; //replace <SCRIPT ID> with your own script ID
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const dropdown = document.getElementById("audio-file");
      dropdown.innerHTML = "";
      data.forEach(file => {
        const option = document.createElement("option");
        option.text = file;
        dropdown.add(option);
      });
    });
}

//Handle form submission
document.getElementById("slickbot-form").addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const payload = {
    "phone_number": formData.get("phone-number"),
    "audio_file": formData.get("audio-file"),
    "first_name": formData.get("first-name"),
    "last_name": formData.get("last-name")
  };
  const url = "https://script.google.com/macros/s/<SCRIPT ID>/exec"; //replace <SCRIPT ID> with your own script ID
  fetch(url, {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert("Your voicemail has been sent successfully!");
    })
    .catch(error => {
      console.error(error);
      alert("Oops! Something went wrong. Please try again later.");
    });
});

//Add event listener to the file input to handle file upload
const fileInput = document.getElementById("audio-file-upload");
fileInput.addEventListener("change", event => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  const url = "https://script.google.com/macros/s/<SCRIPT ID>/exec?action=uploadFile"; //replace <SCRIPT ID> with your own script ID
  fetch(url, {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      loadAudioFiles();
      alert("Your file has been uploaded successfully!");
    })
    .catch(error => {
      console.error(error);
      alert("Oops! Something went wrong. Please try again later.");
    });
});

//Call loadAudioFiles function to populate dropdown with existing audio files
loadAudioFiles();
