console.log("Hello World!");

export default function loader() {
    const div = document.createElement("div");
    const content_title = document.createElement("h2");
    const content_image = document.createElement("img");
    const content_description = document.createElement("p");
    content_title.textContent = "Bem vindo a farmácia ficticia";
    content_image.src = "./img/images.jpeg";
    content_image.alt = "Imagem de medicamentos";
    content_description.innerHTML = "🏥 Bem-vindo à FarmaVida — Cuidando de Você em Cada Etapa <br>Na FarmaVida, sua saúde é nossa prioridade. Somos uma farmácia online dedicada a oferecer medicamentos, produtos de bem-estar e cuidados <br> pessoais com segurança, agilidade e carinho. Navegue por nossas categorias, encontre ofertas exclusivas e receba tudo no conforto da sua casa. <br> 💊 Medicamentos com preços acessíveis e entrega rápida <br>🌿 Produtos naturais e suplementos para o seu bem-estar <br>👶 Cuidados especiais para toda a família, do bebê ao idoso <br>🧴 Higiene, beleza e dermocosméticos das melhores marcas <br>📦 Frete grátis em compras acima de R$150 <br>Conte com a FarmaVida para uma experiência simples, segura e humanizada. Porque cuidar de você é o que nos move. ";

    div.appendChild(content_title);
    div.appendChild(content_image);
    div.appendChild(content_description);

    return div;
}







