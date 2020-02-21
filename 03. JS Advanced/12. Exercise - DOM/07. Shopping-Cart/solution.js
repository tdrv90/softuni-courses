function solve() {
   let productsList = [];
   const products = Array.from(document.querySelectorAll(".product"));
   let productTypes = Array.from(document.querySelectorAll(".product-title"));

   productTypes = productTypes.map((x) => x.textContent);

   console.log(productTypes)
}


document.querySelector("body > div > div:nth-child(2) > div.product-details > div")
