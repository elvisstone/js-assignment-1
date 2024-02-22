const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerTitle = document.querySelector("#title");
const headerUl = document.querySelector(".nav-item");
const headerUlLi = document.querySelectorAll(".nav-item li");
const section = document.querySelector("section");
const usernameInput = document.querySelectorAll("#username");
const passwordInput = document.querySelectorAll("#password");
const loginBtn = document.querySelector(".btn");
const projectsTitle = document.querySelector("h3");
const secondUl = document.querySelector("section ul");
const loadedContent = document.querySelectorAll("section#project ul li");

body.style.minHeight = "100vh";
body.style.minWidth = "100vw";
body.style.backgroundColor = "purple";


header.style.display = "flex";
header.style.color = "white";
header.style.backgroundColor = "#FF4500";
header.style.gap = "1rem";
header.style.width = "80%";
header.style.margin = "0 auto";
header.style.borderRadius = "1rem";;
header.style.flexDirection = "column";
header.style.justifyContent = "center";
header.style.alignItems = "center";


headerTitle.style.color = "white";
headerTitle.style.fontSize = "3rem";
headerTitle.textContent = "Javascript Dom Assignment 1";
headerTitle.style.fontWeight = "bold";


headerUl.style.display = "flex";
headerUl.style.gap = "1.5rem";
headerUl.style.listStyleType = "none";


headerUlLi.forEach((e) => {
    e.style.display = "flex";
    e.style.color = "black";
    e.style.fontSize = "1.5rem";
    e.style.fontWeight = "bold";;
    e.style.cursor = "pointer";
    e.style.margin = "1rem";
})


section.style.display = "flex";
section.style.gap = "1.5rem"


usernameInput.forEach((e) => {
    e.style.backgroundColor = "transparent";
    e.style.padding = ".4rem"
    e.style.border = "none";
    e.style.outline = "none"
    e.style.borderBottom = "2px solid black";
    e.setAttribute("placeholder","username");
})


passwordInput.forEach((e) => {
    e.style.backgroundColor = "transparent";
    e.style.padding = ".4rem"
    e.style.border = "none";
    e.style.outline = "none"
    e.style.borderBottom = "2px solid black";
    e.setAttribute("placeholder","password");
})


loginBtn.style.color = "black";
loginBtn.style.backgroundColor = "#C0EFC0"
loginBtn.style.padding = ".5rem";
loginBtn.style.border = "none";
loginBtn.style.borderRadius = ".5rem";

projectsTitle.style.marginBottom = "1rem"
projectsTitle.style.fontSize = "2rem"

secondUl.style.display = "flex";
secondUl.style.alignItems = "center"
secondUl.style.justifyContent = "center"
secondUl.style.flexDirection = "column"


const liItems = ["Hello World!","Guess NUmber","Checkout Page","Gelir-Gider Projesi","Api Projects"];

liItems.forEach((e) => {
    secondUl.innerHTML += `<li>${e}</li>`;
})
secondUl.style.listStyleType = "number";
secondUl.style.color = "white";
secondUl.style.gap = "1rem";
