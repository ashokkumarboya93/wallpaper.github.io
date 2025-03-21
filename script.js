// You can add interactivity here, like downloading wallpapers
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Wallpaper download initiated!");
    });
});
