const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(cat)}`;

const productList = document.querySelector("#productList");

document.querySelector("h2").textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);

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
