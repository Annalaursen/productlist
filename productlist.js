const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(cat)}`;

const productList = document.querySelector("#productList");
const visantal = document.querySelector("#visantal");

let alledata = [];
let udsnit = [];

document.querySelector("h2").textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    alledata = data;
    udsnit = data;

    visData(udsnit);
  });

document.querySelectorAll("#filtre button").forEach((knap) => {
  knap.addEventListener("click", filtrer);
});

function filtrer(e) {
  const valgt = e.target.textContent;

  if (valgt === "Alle") {
    udsnit = alledata;
  } else {
    udsnit = alledata.filter((produkt) => {
      return produkt.gender === valgt;
    });
  }

  visData(udsnit);
}

function visData(json) {
  visantal.textContent = json.length;

  productList.innerHTML = "";

  json.forEach((element) => {
    productList.innerHTML += `
      <a href="productdetails.html?id=${element.id}">
        <article>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
            alt="${element.productdisplayname}"
          >
          <h3>${element.productdisplayname}</h3>
          <p>${element.brandname}</p>
          <p>${element.price} kr.</p>
        </article>
      </a>
    `;
  });
}
