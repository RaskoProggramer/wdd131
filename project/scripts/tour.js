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
        imageUrl: "",
        reference: ""
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
        imageUrl: "",
        reference: ""
    },
    {
        name: "Constitution Hill",
        location: "Johannesburg",
        category: "History"
    },
    {
        name: "Walter Sisulu Botanical Gardens",
        location: "Roodepoort",
        category: "Nature"
    }
];