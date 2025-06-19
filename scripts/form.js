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

// Product List

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Product List Displayed

const selectElement = document.getElementById('productname');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Count Augment from the form page

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".webForm");

    if (form) {
        form.addEventListener("submit", () => {
            // Increment localStorage count BEFORE page changes
            let count = parseInt(localStorage.getItem("reviewCount") || "0", 10);
            localStorage.setItem("reviewCount", count + 1);
        });
    }
});