// HeaderHamburger Element
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#animation');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// Get Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modals
document.addEventListener("DOMContentLoaded", () => {
    const moreInfoLinks = document.querySelectorAll(".more-info");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    moreInfoLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            modals[index].showModal();
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            modals[index].close();
        });
    });
});
