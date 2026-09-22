const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastupdated");

// Use the Date object
const today = new Date();

// Display the current year
year.textContent = today.getFullYear();

// Display the last modified date and time with seconds
lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full",
        timeStyle: "medium"
    }
).format(new Date(document.lastModified))}`;

// Static weather values
const temperature = 10;
const windSpeed = 5;

// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Display wind chill
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}