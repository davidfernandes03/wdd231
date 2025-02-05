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

// Fetch members.json file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        displaySpotlights(members);
        
    } catch (error) {
        console.error(`Error fetching member data: ${error}`);
    }
}

// Membership Level
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Home
function displaySpotlights(members) {
    console.log('Spotlights function called');
    console.log('Members:', members);

    const spotlightContainer = document.querySelector('.spotlight-list');
    spotlightContainer.innerHTML = '';

    // Silver or Gold Filter
    const eligibleMembers = members.filter(member => member.membership === 2 || member.membership === 3);

    // Selects random members
    const randomMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    randomMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <h3>${member.name}</h3>
            <h4>${getMembershipLevel(member.membership)}</h4>
            <div class="spotlight-details">
                <div class="spotlight-logo">
                    <img src="images/home-directory-img/${member.image}" alt="${member.name} Logo">
                </div>
                <ul class="spotlight-info">
                    <li><strong>Address:</strong> ${member.address}</li>
                    <li><strong>Phone:</strong> ${member.phone}</li>
                    <li><strong>URL:</strong> <a href="${member.website}" target="_blank">Visit Website</a></li>
                </ul>
            </div>
        `;

        spotlightContainer.appendChild(card);
    });
}

fetchMembers();