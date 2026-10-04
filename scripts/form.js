const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastupdated");

// Use the Date object
const today = new Date();

// Display the current year
if (year) {
    year.textContent = today.getFullYear();
}

// Display the last modified date and time
if (lastModified) {
    lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat(
        "en-US",
        {
            dateStyle: "full",
            timeStyle: "medium"
        }
    ).format(new Date(document.lastModified))}`;
}


// Product data
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


// Populate Product Name select
const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}


// Review counter
const reviewCount = document.querySelector("#review-count");

if (reviewCount) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);

    reviewCount.innerHTML = count;
}