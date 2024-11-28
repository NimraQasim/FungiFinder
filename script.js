// Select the toggle button (SVG) and the dropdown menu
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add a click event listener to toggle visibility
menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden'); // Add/remove 'hidden' class
});
