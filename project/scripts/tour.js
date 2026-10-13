const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastupdated");
const card = document.querySelector("#card")
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const mainnav = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamburger.classList.toggle('show');
});

const today = new Date();

year.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full",
        timeStyle: "medium"
    }
).format(new Date(document.lastModified))}`;

const attractions = [
    {
        name: "Apartheid Museum",
        location: "Johannesburg",
        category: "History",
        image: "images/apartheid-museum.jpg",
        reference: "https://www.apartheidmuseum.org",
        price: "R200"
    },
    {
        name: "Cradle of Humankind",
        location: "West Rand",
        category: "Heritage",
        image: "images/cradle-of-humankind.jpg",
        reference: "https://www.maropeng.co.za",
        price: "R250"
    },
    {
        name: "Sterkfontein Caves",
        location: "Krugersdorp",
        category: "Nature",
        image: "images/sterkfontein-caves.jpg",
        reference: "https://sterkfonteincaves.wits.ac.za/caves/",
        price: "R350"
    },
    {
        name: "Freedom Park",
        location: "Pretoria",
        category: "Heritage",
        image: "images/freedom-park.jpg",
        reference: "https://sahistory.org.za/place/freedom-park",
        price: "R70"
    },
    {
        name: "Hector Pieterson Memorial",
        location: "Soweto",
        category: "History",
        image: "images/hector-pieterson-memorial.jpg",
        reference: "https://www.cipdh.gob.ar/memorias-situadas/en/lugar-de-memoria/memorial-y-museo-hector-pieterson/",
        price: "Free"
    },
    {
        name: "Lion & Safari Park",
        location: "Broederstroom",
        category: "Wildlife",
        image: "images/lion-safari.jpg",
        reference: "https://www.tripadvisor.co.za/Attraction_Review-g1910063-d481147-Reviews-Lion_and_Safari_Park-Broederstroom_Madibeng_North_West_Province.html",
        price: "R280"
    },
];

const attractionGrid = document.querySelector("#attraction-grid");


function displayAttractions() {

    attractionGrid.innerHTML = "";

    attractions.forEach(attraction => {

        const card = document.createElement("article");

        card.classList.add("attraction-card");

        card.innerHTML = `
            <img 
                src="${attraction.image}" 
                alt="${attraction.name}"
                loading="lazy"
            >

            <div class="card-content">
                <h3>${attraction.name}</h3>

                <p><strong>Location:</strong> ${attraction.location}</p>

                <p><strong>Category:</strong> ${attraction.category}</p>

                <p class="price">
                    Entrance: ${attraction.price}
                </p>
            </div>
        `;

        attractionGrid.appendChild(card);
    });
}

displayAttractions();

const referenceList = document.querySelector(".reference");

function displayReference() {
    const referenceList = document.querySelector(".reference");
    referenceList.innerHTML = "";
    attractions.forEach(reference => {
        referenceList.innerHTML += `
            <li>
                <a href="${reference.reference}" target="_blank" rel="noopener noreferrer">
                ${reference.name}
            </a>
        </li>
    `;
    });
}

displayReference();


const products = [
    {
        id: "Apartheid Museum",
        name: "Apartheid Museum",
    },
    {
        id: "Cradle of Humankind",
        name: "Cradle of Humankind",
    },
    {
        id: "Sterkfontein Caves",
        name: "Sterkfontein Caves",
    },
    {
        id: "Freedom Park",
        name: "Freedom Park",
    },
    {
        id: "Hector Pieterson Memorial",
        name: "Hector Pieterson Memorial",
    },
    {
        id: "Lion & Safari Park",
        name: "Lion & Safari Park",
    }
];


// Populate Product Name select
const productSelect = document.querySelector("#tour");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}


// Review counter
const reviewCount = document.querySelector("#booking");

if (reviewCount) {
    let count = Number(localStorage.getItem("booking")) || 0;

    count++;

    localStorage.setItem("booking", count);

    reviewCount.innerHTML = count;
}