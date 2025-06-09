const hamButton = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

 // Current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Date in WAT
document.addEventListener("DOMContentLoaded", () => {
    const lastModRaw = document.lastModified;
    const localDate = new Date(lastModRaw);

    // Convert to UTC+1 (WAT)
    const watOffsetMs = 60 * 60 * 1000; // 1 hour in milliseconds
    const watDate = new Date(localDate.getTime() + watOffsetMs - (localDate.getTimezoneOffset() * 60000));

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(watDate);

    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate} West Africa Time`;
});

// Import temple info per assignment page

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
     {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-33347-main.jpg"
    },
     {
        templeName: "Boise Idaho",
        location: "Boise, Idaho",
        dedicated: "1984, May, 30",
        area: 35868,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-41667-main.jpg"
    },
    {
        templeName: "Budapest Hungary",
        location: "Budapest, Hungary",
        dedicated: "2025, June, 21",
        area: 18000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/budapest-hungary-temple/budapest-hungary-temple-58578-main.jpg"
    },

];

// Create temple cards

const templeContainer = document.querySelector(".images");

function renderTemples(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        templeContainer.innerHTML +=
            `<div class="temple-card">
        <h3>${temple.templeName}</h3>
        <p>LOCATION: ${temple.location}</p>
        <p>DEDICATED: ${temple.dedicated}</p>
        <p>AREA: ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="200">
      </div>`;
    });
}

// Add in clickable changes to document

document.querySelector("#home").addEventListener("click", () => {
    renderTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    renderTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    renderTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
});

// Replace original construct of the temple cards with one that calls the function created

renderTemples(temples);