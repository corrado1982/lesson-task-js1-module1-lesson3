const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

const displayProperty = document.querySelector(".container");

let textUnderlined = "none";

if (product.onSale) {
    textUnderlined = "underline";
}

let typeOfPrice = typeof(product.price);

if (typeOfPrice !== "number") {
    product.price = "For you is for free!!!";
}

displayProperty.innerHTML = `<div>
<h4 style="text-decoration:${textUnderlined }">${product.name}</h4>
<p>Price: ${product.price}</p>
</div> `;

