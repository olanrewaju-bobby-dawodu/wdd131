// constants
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Last Modified Date

document.addEventListener("DOMContentLoaded", () => {
    const lastModRaw = document.lastModified;
    const lastModDate = new Date(lastModRaw);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(lastModDate);

    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate} Mountain Standard Time`;
});