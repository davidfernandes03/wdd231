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

        displayDirectory(members);

    } catch (error) {
        console.error(`Error fetching member data: ${error}`);
    }
}

// Directory
function displayDirectory(members) {
    const directoryContent = document.querySelector('.directory-content');
    directoryContent.innerHTML = '';

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <section>
                <img src="images/home-directory-img/${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p id="address">${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p id="member"><strong>Membership Level: <br id="for-list">${getMembershipLevel(member.membership)}</strong></p>
                <p id="descript">${member.description}</p>
            </section>
        `;

        directoryContent.appendChild(memberCard);
    });
}

// Toggle between grid and list view
document.getElementById('grid-view').addEventListener('click', () => {
    document.querySelector('.directory-content').classList.add('grid');
    document.querySelector('.directory-content').classList.remove('list');
});
document.getElementById('list-view').addEventListener('click', () => {
    document.querySelector('.directory-content').classList.add('list');
    document.querySelector('.directory-content').classList.remove('grid');
});

// Membership Level
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

fetchMembers();