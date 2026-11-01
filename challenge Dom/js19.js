const products = [
    { titre: "Casque audio", prix: 89.9, image: "/images/casque.png" },
    { titre: "Montre classique", prix: 129, image: "/images/montre.png" },
    { titre: "Sac à dos", prix: 59.5, image: "/images/sac.png" },
];
const container = document.getElementById("products")

function add(products) {
    for (let i = 0; i < products.length; i++) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.setAttribute("src", products[i].image)
        const h3 = document.createElement("h3")
        h3.textContent = products[i].titre
        const price = document.createElement("p")
        price.textContent=products[i].prix
        div.append(img,h3,price)
        div.className="product-card"
        container.append(div)
    }
}
add(products)