export default function loader() {
    const div = document.createElement("div");
    div.classList.add("menu");

    const offers = document.createElement("div");
    offers.classList.add("offers");
    offers.innerHTML = "<div class='offer'><img src='../img/offer1.jpeg'></img></div><div class='offer'><img src='../img/offer2.webp'></div><div class='offer'><img src='../img/offer3.png'></div><div class='offer'><img src='../img/offer4.png'></div>";
    


    const products = document.createElement("div");
    products.classList.add("products");
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = "<h3>Dipirona Monoidratada 1gr 10 Comprimidos</h3> <p>R$10,80</p>"
    products.appendChild(product);
    
    div.append(offers);
    div.append(products);

    return div;

}