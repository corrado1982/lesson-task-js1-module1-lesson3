const products = [
    {
        name: "Fancy Product",
        price: 40,
        soldOut: true,
    },
    {
        name: "Another Product",
        soldOut: false,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: true,
    },
];

let selectContainer = document.querySelector(".container");

    let items = "";
for (let i = 0; i < products.length; i++) {
    
    //console.log(items)

let price = "Contact us"
if (isNaN(products[i].price)) {
        products[i].price = price ;
}
let nameColor = "green";

if (products[i].soldOut) {
    nameColor = "red" ; 
}

items +=`   <div><p style="color: ${nameColor}">  ${products[i].name} </p>
            <p> Price: ${products[i].price} </p>
            </div>
`;}

selectContainer.innerHTML = items;

