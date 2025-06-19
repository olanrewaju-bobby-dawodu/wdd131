const artists = [
  {
    name: "Bob Marley",
    genre: "reggae",
    images: {
      portrait: "images/bob_marley_portrait.jpg",
      real: "images/bob_marley_real.jpg"
    },
    description: "Bob Marley was a Jamaican singer and songwriter who became an international icon of reggae, peace, and social change. Known for 'One Love' and 'Redemption Song'."
  },
  {
    name: "Aretha Franklin",
    genre: "soul",
    images: {
      portrait: "images/aretha_franklin_portrait.jpg",
      real: "images/aretha_franklin_real.jpg"
    },
    description: "Aretha Franklin, the Queen of Soul, brought raw emotion and incredible power to classics like 'Respect' and 'Natural Woman'."
  },
  {
    name: "Michael Jackson",
    genre: "pop",
    images: {
      portrait: "images/michael_jackson_portrait.jpg",
      real: "images/michael_jackson_real.jpg"
    },
    description: "The King of Pop, Michael Jackson revolutionized music, dance, and pop culture with his iconic moves and global hits like 'Thriller' and 'Billie Jean'."
  },
  {
    name: "Elvis Presley",
    genre: "rock",
    images: {
      portrait: "images/elvis_presley_portrait.jpg",
      real: "images/elvis_presley_real.jpg"
    },
    description: "Elvis Presley fused gospel, blues, and country to create rock ‘n’ roll. Known for his electrifying stage presence and hits like 'Jailhouse Rock'."
  },
  {
    name: "Whitney Houston",
    genre: "pop",
    images: {
      portrait: "images/whitney_houston_portrait.jpg",
      real: "images/whitney_houston_real.jpg"
    },
    description: "Whitney Houston was a vocal powerhouse with a range unmatched in modern music. Her hits include 'I Will Always Love You' and 'Greatest Love of All'."
  },
  {
    name: "James Brown",
    genre: "soul",
    images: {
      portrait: "images/james_brown_portrait.jpg",
      real: "images/james_brown_real.jpg"
    },
    description: "Known as the 'Godfather of Soul', James Brown revolutionized funk and inspired countless artists with his energy, voice, and rhythms."
  }
];

let currentImageMode = "portrait";

// Render artist cards
function renderArtists(filtered = artists) {
  const container = document.getElementById("artistContainer");
  if (!container) return;

  container.innerHTML = "";
  filtered.forEach(artist => {
    const card = document.createElement("div");
    card.className = "artist-card fade-in";
    card.innerHTML = `
      <img src="${artist.images[currentImageMode]}" alt="${artist.name}" loading="lazy" onerror="this.src='images/default.jpg'">
      <h3>${artist.name}</h3>
      <p><strong>Genre:</strong> ${artist.genre}</p>
      <p>${artist.description}</p>
    `;
    container.appendChild(card);
  });
}

// Genre dropdown filter
function setupFilter() {
  const select = document.getElementById("genreFilter");
  if (!select) return;

  select.addEventListener("change", () => {
    const genre = select.value;
    const filtered = genre === "all" ? artists : artists.filter(a => a.genre === genre);
    renderArtists(filtered);
  });
}

// Image mode toggle
function setupImageModeToggle() {
  const toggle = document.getElementById("imageModeToggle");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    currentImageMode = toggle.value;
    renderArtists(); // re-render with updated image mode
  });
}

// Back-to-top button
function setupBackToTop() {
  const button = document.createElement("button");
  button.id = "backToTop";
  button.textContent = "↑ Top";
  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    button.style.display = window.scrollY > 300 ? "block" : "none";
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact form with localStorage
function setupContactForm() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name").value;
    const message = form.querySelector("#message").value;
    localStorage.setItem("contactName", name);
    localStorage.setItem("contactMessage", message);
    alert(`Thanks ${name}, your message was saved!`);
    form.reset();
  });
}

// Unified DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
  // Update current year
  const year = document.querySelector("#currentyear");
  if (year) {
    const today = new Date();
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
  }

  // Last modified date (WAT)
  const lastModElement = document.getElementById("lastModified");
  if (lastModElement) {
    const lastModRaw = document.lastModified;
    const localDate = new Date(lastModRaw);
    const watOffsetMs = 60 * 60 * 1000;
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
    lastModElement.textContent = `Last Modification: ${formattedDate} West Africa Time`;
  }

  // Back to top setup
  setupBackToTop();

  // Artist page logic
  if (document.body.classList.contains("artists-page")) {
    renderArtists();
    setupFilter();
    setupImageModeToggle();
  }

  // Contact form logic
  if (document.body.classList.contains("contact-page")) {
    setupContactForm();
  }
});
