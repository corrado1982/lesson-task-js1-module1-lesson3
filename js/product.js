const product = {
    name: "Fancy Product",
    price: 99,
    onSale: true,
};

const displayProperty = document.querySelector(".container");

let textUnderlined = "underline";


displayProperty.innerHTML = `<div>
<h4 style="text-decoration:${textUnderlined }">${product.name}</h4>
<p>${product.price}</p>
</div> `;

