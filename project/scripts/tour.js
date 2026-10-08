const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastupdated");
const card = document.querySelector("#card")
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const menuOpen = navigation.classList.contains("show");

    menuButton.setAttribute("aria-expanded", menuOpen);

    menuButton.setAttribute(
        "aria-label",
        menuOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = menuOpen ? "✕" : "☰";
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
        imageUrl: "https://www.apartheidmuseum.org/uploads/_imager/files/10295/apartheidmuseum35-5_cf6e8a615b8ba10f48641f1fa46732ab_483e830570d067671dbb7719fdbfa114.webp",
        reference: "https://www.apartheidmuseum.org"
    },
    {
        name: "Cradle of Humankind",
        location: "West Rand",
        category: "Heritage",
        imageUrl: "https://wa-uploads.profitroom.com/maropengboutiquehotel/900x509/17834919176217_.push2199.webp",
        reference: "https://www.maropeng.co.za"
    },
    {
        name: "Sterkfontein Caves",
        location: "Krugersdorp",
        category: "Nature",
        imageUrl: "https://sterkfonteincaves.wits.ac.za/media/wits-university/sterkfontein/images/Sterkfontein%20Caves.jpg",
        reference: "https://sterkfonteincaves.wits.ac.za/caves/"
    },
    {
        name: "Freedom Park",
        location: "Pretoria",
        category: "Heritage",
        imageUrl: "https://sahistory.org.za/sites/default/files/place%20images/freedom_park.png",
        reference: "https://sahistory.org.za/place/freedom-park"
    },
    {
        name: "Hector Pieterson Memorial",
        location: "Soweto",
        category: "History",
        imageUrl: "https://www.cipdh.gob.ar/memorias-situadas/wp-content/uploads/2019/02/Hector-Pieterson-Memorial_1-copia.jpg",
        reference: "https://www.cipdh.gob.ar/memorias-situadas/en/lugar-de-memoria/memorial-y-museo-hector-pieterson/"
    },
    {
        name: "Lion & Safari Park",
        location: "Broederstroom",
        category: "Wildlife",
        imageUrl: "https://www.tripadvisor.co.za/AttractionProductReview-g312578-d34293989-Johannesburg_Harties_Aerial_Cableway_Safari_Park_Tour-Johannesburg_Greater_Johanne.html",
        reference: "https://www.tripadvisor.co.za/Attraction_Review-g1910063-d481147-Reviews-Lion_and_Safari_Park-Broederstroom_Madibeng_North_West_Province.html"
    },
    // {
    //     name: "Constitution Hill",
    //     location: "Johannesburg",
    //     category: "History",
    //     imageUrl: "https://live.southafrica.net/media/149645/17504796308_30211e640f_o.jpg?anchor=center&mode=crop&quality=100&width=414&height=340&bgcolor=white&rnd=131570396400000000",
    //     reference: "https://www.southafrica.net/gl/en/travel/article/place-of-human-rights-constitution-hill-johannesburg"
    // }
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