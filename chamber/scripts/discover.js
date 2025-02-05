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
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


document.addEventListener("DOMContentLoaded", async () => {
    const gridContainer = document.querySelector(".discover-grid");
    const visitInfo = document.getElementById("visit-info");

    try {
        const response = await fetch("data/items.json");
        const items = await response.json();

        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("discover-card");

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="images/discover-img/${item.image}" alt="${item.name}" loading="lazy">
                </figure>
                <p>${item.description}</p>
                <address>${item.address}</address>
                <button class="learn-more">Learn More</button>
            `;

            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error("The following error has occured:", error);
    }

    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitInfo.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            visitInfo.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitInfo.textContent = "You last visited 1 day ago";
        } else {
            visitInfo.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }
    
    localStorage.setItem("lastVisit", currentVisit);
});