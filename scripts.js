// Dark Mode Toggle Script
const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙 Toggle Dark Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
