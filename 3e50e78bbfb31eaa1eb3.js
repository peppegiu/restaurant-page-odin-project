import "./style.css"
import {default as aboutLoader} from "./modules/sobre";
import {default as menuLoader} from "./modules/menu";
import {default as mainLoader} from "./modules/page_content";

const content = document.querySelector("div#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
const navbuttons = document.querySelector("nav").children;


for (const button of navbuttons) {
    button.addEventListener("click", () => {
        for (const btn of navbuttons) {
            btn.classList.remove("selected");
        }

        button.classList.add("selected");
    })
}


homeButton.addEventListener("load", () => {
    homeLoader();
})

function homeLoader() {
    content.innerHTML = "";
    const homeDiv = mainLoader();
    content.appendChild(homeDiv);
}

homeButton.addEventListener("click", () => {
    homeLoader();
})


menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    const menuDiv = menuLoader();
    content.append(menuDiv);
})

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    const aboutDiv = aboutLoader();
    content.append(aboutDiv);
})

window.addEventListener("load", () => document.querySelector(".home").click());
