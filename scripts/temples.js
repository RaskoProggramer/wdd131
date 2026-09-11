const mainnav = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');
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


hamburger.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamburger.classList.toggle('show');
});

