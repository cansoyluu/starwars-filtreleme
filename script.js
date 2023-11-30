const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/es.starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg/revision/latest?cb=20160716165228",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

let row = document.querySelector(".row");
let isStatus = true;
document.getElementById("can").addEventListener("click", function (e) {
  if (isStatus === true) {
    row.innerHTML = "";

    let filteredCharacters = characters.filter((x) =>
      x?.homeworld?.includes(selectedHomeworld)
    );

    for (let index = 0; index < filteredCharacters.length; index++) {
      row.innerHTML += `
        
        <div class="col">
        <div class="card mt-5" style="width: 18rem;">
            <img src="${filteredCharacters[index].pic}" class="card-img-top bg-black" alt="...">
            <div class="card-body bg-black">
              <h5 class="card-title text-white text-center">${filteredCharacters[index].name}</h5>
              <p class="card-text text-white text-center">${filteredCharacters[index].homeworld}</p>
            </div>
          </div>
       </div>
        
        `;
    }
    e.target.style.background = "red";
    e.target.textContent = "Lİseteyi Kaldır";

    isStatus = false;
  } else {
    let card = document.querySelectorAll(".col");
    for (let index2 = 0; index2 < card.length; index2++) {
      card[index2].classList.add("d-none");
      e.target.style.background = "green";
      e.target.textContent = "Lİseteyi Görüntüle";
      isStatus = true;
    }
  }
});

const homeworldsRaw = characters.map((characters) => characters.homeworld);
const homeworldsCleaned = homeworldsRaw.map(
  (homeworld) => homeworld ?? "other"
);
const homeworldsLowercase = homeworldsCleaned.map((homeworld) =>
  homeworld.toLowerCase()
);
const homeworldsUnique = [...new Set(homeworldsLowercase)];
console.log(homeworldsUnique);

let filterButon = document.querySelector(".filter");
let radioButtonHTML = "";

homeworldsUnique.forEach(function (homeworld, index) {
  radioButtonHTML += `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="homeworld-${index}" onclick="handleRadioButtonClick('${homeworld}')">
      <label class="form-check-label text-white" for="homeworld-${index}">${homeworld}</label>
    </div>`;
  filterButon.remove();
});
radioButtonHTML += `
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="homeworld-99" onclick="handleRadioButtonClick('')">
  <label class="form-check-label text-white" for="homeworld-99">all</label>
</div>`;
filterButon.innerHTML = radioButtonHTML;

let filter = document.createElement("button");
let btn1 = document.getElementById("filter-btn");
btn1.appendChild(filter);
filter.textContent = "Filtrele";
filter.style.cssText =
  "color:white; background:green; font-size:16px; padding:8px; width:8rem; border-radius:1.5rem;";

let cann = true;

filter.onclick = function () {
  if (cann) {
    cann = false;
    document.getElementById("filter-btn").appendChild(filterButon);
    filter.style.backgroundColor = "green";
    filter.textContent = "Filtrele";
  } else {
    cann = true;
    filter.textContent = "Filtrele";
    filter.style.backgroundColor = "red";
    filterButon.remove();
  }
  if (selectedHomeworld) {
    // Seçilen homeworld'e göre filtreleme işlemlerini burada yapabilirsiniz
    console.log("Seçilen Homeworld:", selectedHomeworld);
    // Örneğin, sadece seçilen homeworld'e sahip karakterleri filtreleyebilirsiniz
    const filteredCharacters = characters.filter(
      (character) => character?.homeworld?.toLowerCase() === selectedHomeworld
    );
    console.log("Filtrelenmiş Karakterler:", filteredCharacters);
  } else {
    // Eğer hiçbir homeworld seçilmediyse, tüm karakterleri göster
    console.log("Tüm Karakterler:", characters);
  }
};
let selectedHomeworld = ""; // Seçilen homeworld'ü saklamak için değişken

// Radio butonlarına tıklandığında çağrılacak fonksiyon
function handleRadioButtonClick(homeworld) {
  selectedHomeworld = homeworld;
  filterCharactersByHomeworld();
}
function filterCharactersByHomeworld() {
  if (selectedHomeworld) {
    const filteredCharacters = characters.filter((character) =>
      selectedHomeworld === "other"
        ? character?.homeworld === undefined
        : character?.homeworld?.toLowerCase() === selectedHomeworld
    );
    console.log("Filtered Characters:", filteredCharacters);

    row.innerHTML = "";

    for (let index = 0; index < filteredCharacters.length; index++) {
      row.innerHTML += `
        <div class="col">
          <div class="card mt-5" style="width: 18rem;">
            <img src="${filteredCharacters[index].pic}" class="card-img-top bg-black" alt="...">
            <div class="card-body bg-black">
              <h5 class="card-title text-white text-center">${filteredCharacters[index].name}</h5>
              <p class="card-text text-white text-center">${filteredCharacters[index].homeworld}</p>
            </div>
          </div>
        </div>`;
    }
  } else {
    console.log("All Characters:", characters);

    row.innerHTML = "";

    for (let index = 0; index < characters.length; index++) {
      row.innerHTML += `
        <div class="col">
          <div class="card mt-5" style="width: 18rem;">
            <img src="${characters[index].pic}" class="card-img-top bg-black" alt="...">
            <div class="card-body bg-black">
              <h5 class="card-title text-white text-center">${characters[index].name}</h5>
              <p class="card-text text-white text-center">${characters[index].homeworld}</p>
            </div>
          </div>
        </div>`;
    }
  }
}
