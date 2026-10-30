const kysymykset = [
    // Pelit & Viihde
    {
        kysymys: "Mikä näistä on Minecraftin suosittu blokki?",
        vastaukset: [
            { teksti: "Dirt", oikein: true },
            { teksti: "Plastic", oikein: false },
            { teksti: "Steel", oikein: false },
            { teksti: "Cardboard", oikein: false }
        ]
    },
    {
        kysymys: "Mikä on maailman myydyin peli?",
        vastaukset: [
            { teksti: "GTA V", oikein: false },
            { teksti: "Tetris", oikein: false },
            { teksti: "Minecraft", oikein: true },
            { teksti: "Fortnite", oikein: false }
        ]
    },
    {
        kysymys: "Minkä värinen on Pac-Man?",
        vastaukset: [
            { teksti: "Punainen", oikein: false },
            { teksti: "Keltainen", oikein: true },
            { teksti: "Sininen", oikein: false },
            { teksti: "Vihreä", oikein: false }
        ]
    },
    {
        kysymys: "Mikä on Mario-pelin päähenkilön ammatti?",
        vastaukset: [
            { teksti: "Sähköasentaja", oikein: false },
            { teksti: "Putkimies", oikein: true },
            { teksti: "Poliisi", oikein: false },
            { teksti: "Kokki", oikein: false }
        ]
    },

    // Yleistieto & Maantieto
    {
        kysymys: "Mikä on Suomen pääkaupunki?",
        vastaukset: [
            { teksti: "Tampere", oikein: false },
            { teksti: "Helsinki", oikein: true },
            { teksti: "Turku", oikein: false },
            { teksti: "Oulu", oikein: false }
        ]
    },
    {
        kysymys: "Mitä värejä on Suomen lipussa?",
        vastaukset: [
            { teksti: "Sininen ja valkoinen", oikein: true },
            { teksti: "Punainen ja keltainen", oikein: false },
            { teksti: "Vihreä ja valkoinen", oikein: false },
            { teksti: "Sininen ja punainen", oikein: false }
        ]
    },
    {
        kysymys: "Mikä on maailman suurin valtameri?",
        vastaukset: [
            { teksti: "Atlantti", oikein: false },
            { teksti: "Intian valtameri", oikein: false },
            { teksti: "Tyynimeri", oikein: true },
            { teksti: "Jäämeri", oikein: false }
        ]
    },

    // Eläimet
    {
        kysymys: "Mikä on maailman suurin eläin?",
        vastaukset: [
            { teksti: "Norsu", oikein: false },
            { teksti: "Sinivalas", oikein: true },
            { teksti: "Kirahvi", oikein: false },
            { teksti: "Valkohai", oikein: false }
        ]
    },
    {
        kysymys: "Kuinka monta jalkaa hämähäkillä on?",
        vastaukset: [
            { teksti: "6", oikein: false },
            { teksti: "8", oikein: true },
            { teksti: "10", oikein: false },
            { teksti: "12", oikein: false }
        ]
    },

    // Tiede
    {
        kysymys: "Paljonko on 5 x 5?",
        vastaukset: [
            { teksti: "20", oikein: false },
            { teksti: "15", oikein: false },
            { teksti: "25", oikein: true },
            { teksti: "30", oikein: false }
        ]
    }
];

let nykyinenKysymysIndex = 0;
let pisteet = 0;

function aloitaPeli() {
    nykyinenKysymysIndex = 0;
    pisteet = 0;
    document.getElementById("tulos-alue").classList.add("piilossa");
    document.getElementById("quiz").classList.remove("piilossa");
    naytaKysymys();
}

function naytaKysymys() {
    tyhjennaNapit();
    let nykyinenKysymys = kysymykset[nykyinenKysymysIndex];
    document.getElementById("kysymys").textContent = `${nykyinenKysymysIndex + 1}/${kysymykset.length}: ${nykyinenKysymys.kysymys}`;

    nykyinenKysymys.vastaukset.forEach(vastaus => {
        const button = document.createElement("button");
        button.textContent = vastaus.teksti;
        button.disabled = false;
        button.onclick = () => valitseVastaus(button, vastaus.oikein);
        document.getElementById("vastaus-napit").appendChild(button);
    });
}

function tyhjennaNapit() {
    document.getElementById("vastaus-napit").innerHTML = "";
}

function valitseVastaus(nappi, onkoOikein) {
    if (onkoOikein) {
        nappi.classList.add("oikein");
        pisteet++;
    } else {
        nappi.classList.add("vaarin");
    }

    const napit = document.getElementById("vastaus-napit").children;
    for (let b of napit) {
        b.disabled = true;
    }

    setTimeout(() => {
        nykyinenKysymysIndex++;
        if (nykyinenKysymysIndex < kysymykset.length) {
            naytaKysymys();
        } else {
            naytaTulos();
        }
    }, 1000);
}

function naytaTulos() {
    document.getElementById("quiz").classList.add("piilossa");
    document.getElementById("tulos-alue").classList.remove("piilossa");
    document.getElementById("pisteet").textContent = `Sait ${pisteet} / ${kysymykset.length} oikein!`;
}

aloitaPeli();
