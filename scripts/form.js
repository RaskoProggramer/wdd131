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

const productSelect = document.querySelector("#product");

products.forEach((product) => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;
    option.textContent = `${product.name} - ⭐ ${product.averagerating}`;

    productSelect.appendChild(option);
});

const reviewCount = document.querySelector("#review-count");

let count = Number(localStorage.getItem("reviewCount")) || 0;

count++;

localStorage.setItem("reviewCount", count);

reviewCount.textContent = count;