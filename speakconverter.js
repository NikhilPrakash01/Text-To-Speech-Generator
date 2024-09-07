// Get references to DOM elements
const textarea = document.querySelector('textarea');
const voicesSelect = document.getElementById('voices');
const speakButton = document.getElementById('speakButton');

// Populate the voices dropdown list
function populateVoices() {
  const voices = window.speechSynthesis.getVoices();
  voicesSelect.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Initialize the voices dropdown
window.speechSynthesis.onvoiceschanged = populateVoices;

// Event listener for the "Listen" button click
speakButton.addEventListener('click', () => {
  const selectedVoice = voicesSelect.value;
  const utterance = new SpeechSynthesisUtterance(textarea.value);
  
  // Find the selected voice and set it to the utterance
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.name === selectedVoice);
  utterance.voice = voice;

  // Speak the text
  window.speechSynthesis.speak(utterance);
});
