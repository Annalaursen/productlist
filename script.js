// const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=20";

// const produktliste = document.querySelector("section");

// fetch(endpoint)
//   .then((res) => res.json())
//   .then(visData);

// function visData(json) {
//   console.log(json);

//   json.forEach((element) => {
//     produktliste.innerHTML += `
//       <a href="productdetails.html?id=${element.id}">
//         <article class="card">
//           <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede">
//           <h2>${element.productdisplayname}</h2>
//           <h3>${element.brandname}</h3>
//           <p>${element.articletype}</p>
//           <p>${element.price}</p>
//         </article>
//       </a>
//     `;
//   });
// }

const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const catListeContainer = document.querySelector("#catListeContainer");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);

  json.forEach((element) => {
    catListeContainer.innerHTML += `
      <a href="productlist.html?cat=${encodeURIComponent(element.category)}">
        ${element.category}
      </a>
    `;
  });
}
