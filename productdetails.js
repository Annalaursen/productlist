// const id = new URLSearchParams(window.location.search).get("id");
// const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

// const product = document.querySelector("#product");

// fetch(endpoint)
//   .then((res) => res.json())
//   .then((data) => visData(data));

// function visData(element) {
//   console.log(element);

//   product.innerHTML = `
//     <article class="product-detail">
//       <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede">

//       <h2>${element.productdisplayname}</h2>
//       <h3>${element.brandname}</h3>
//       <p>${element.articletype}</p>
//       <p>${element.price}</p>
//     </article>
//   `;
// }

const id = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const product = document.querySelector("#product");

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => visData(data));

function visData(element) {
  console.log(element);

  product.innerHTML = `
    <article class="product-detail">
      <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"
        alt="${element.productdisplayname}"
      >

      <h2>${element.productdisplayname}</h2>
      <h3>${element.brandname}</h3>
      <p>${element.articletype}</p>
      <p>${element.price} kr.</p>
    </article>
  `;
}
