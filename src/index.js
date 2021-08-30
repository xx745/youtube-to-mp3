const input = document.getElementById('url-input')
const button = document.getElementById('download-button')

button.addEventListener('click', () => {
    sendURL(input.value);
});

function sendURL(URL) {
  window.location.href = `http://localhost:8080/download?URL=${URL}`;
}