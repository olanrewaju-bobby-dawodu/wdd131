/**
 * Calculates wind chill using the Canadian formula.
 * @param {number} tempC - Temperature in degrees Celsius.
 * @param {number} speedKmh - Wind speed in kilometers per hour.
 * @returns {string} - Wind chill in °C, rounded to 1 decimal place.
 */
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Display current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Get and convert last modified date to West Africa Time (UTC+1)
  const lastModRaw = document.lastModified;
  const localDate = new Date(lastModRaw);
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

  // Display last modified date
  document.getElementById("lastModified").textContent =
    `Last Modification: ${formattedDate} West Africa Time`;

  // Wind chill calculation
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillEl = document.getElementById("chill");

  if (temp <= 10 && wind > 4.8) {
    chillEl.textContent = `${calculateWindChill(temp, wind)} °C`;
  } else {
    chillEl.textContent = "N/A";
  }
});
