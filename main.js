const scroller = document.querySelector('.scroller');
const episodes = document.querySelector('.episodes');
const episodeItems = document.querySelectorAll('.episode');
const episodeWidth = episodeItems[0].offsetWidth;
const totalEpisodes = episodeItems.length;

let currentIndex = 0;

function updateScroll() {
  // Get the current scroll position of the webpage
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  // Calculate the index based on the scroll position
  currentIndex = Math.floor(scrollY / episodeWidth);

  // Ensure the index is within valid bounds
  currentIndex = Math.max(0, Math.min(currentIndex, totalEpisodes - 1));

  // Calculate the offset for the current index
  const offset = -currentIndex * episodeWidth*3;

  // Apply the transform to the episodes container
  episodes.style.transform = `translateX(${offset}px)`;
}

// Initial check to set the correct episode based on the initial scroll position
updateScroll();

// Add a scroll event listener to update the scroll position
window.addEventListener('scroll', updateScroll);

const sidebarCheckbox = document.getElementById("sidebar-checkbox");
const hamburger = document.querySelector('.hamburger');
const navbar_moblie = document.querySelector(".navbar_moblie");
const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

// Function to close the navigation bar
function closeNavBar() {
    navbar_moblie.style.opacity = '0';
    navbar_moblie.style.transform = 'translateY(-100%)';
    hamburger.style.color = 'rgb(255, 255, 255)';
   // Uncheck the checkbox to close the navigation bar
}

hamburger.addEventListener('click', () => {
    if (sidebarCheckbox.checked) {
        closeNavBar();
    } else {
        navbar_moblie.style.opacity = '1';
        navbar_moblie.style.transform = 'translateY(0)';
        hamburger.style.color = 'rgb(0, 0, 0)';
    }
});

// Add an event listener to each navigation link to close the navigation bar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNavBar(); // Call the function to close the navigation bar
    });
});