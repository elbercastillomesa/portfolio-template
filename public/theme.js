// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    
    // Check if dark mode is active
    const isDarkMode = body.getAttribute('data-theme') === 'dark';
    
    // Toggle theme
    if (isDarkMode) {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
}

// Function to set initial theme based on user's preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('#themeToggle i');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Add click event listener to theme toggle button
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Set initial theme when page loads
document.addEventListener('DOMContentLoaded', setInitialTheme);