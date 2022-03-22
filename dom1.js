// inner html and textcontent

const list = document.querySelector(".first");
const div = document.querySelector("#second");
const item = document.querySelector(".item");

console.log(list, div, item);
// insert with  inner HTML , easier that all other steps

// wioth templetaes strings ease to insert all info

const randomContent = " hola como estas ";
const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">super</li>
        <li>comida</li>
        <li>marea</li>
        <li>musica</li>
        <li>alegria</li>
        <li>alegria</li>${randomContent}
        <li>comida</li>
        <li>marea</li>
        <li>musica</li>
        <li>alegria</li>
        <li>alegria</li>
        <li>comida</li>
        <li>marea</li>
        <li>musica</li>
        <li>alegria</li>
        <li>alegria</li>`;

document.body.appendChild(ul);

//!! events

// principles behind the events

// select  element.
// ddeventlistener

const btn = document.querySelector("#boton");
let texto = document.getElementById("2");
console.log(texto);
console.log(btn);
btn.addEventListener("mousedown", alertFunction);

function alertFunction() {
  let hasclass = texto.classList.contains("text");
  if (hasclass) {
    texto.classList.remove("text");
  } else {
    texto.classList.add("text");
  }
}

// function reference !!!

//?  usuing to change clases and addd functiioballyty

// ! click, mousedown, mouse down, mouseeter,. mouseleave.  some examples

const heading = document.getElementById("2");
console.log(heading);

// ============
const btn2 = document.querySelector("#boton2");
const texto2 = document.getElementById("3");

btn2.addEventListener("mouseenter", llamar);

function llamar(event) {
  event.preventDefault();
  console.log(event);
}

// ===============================
//! key event. !!!!
//? keypress, keyydown, keyup
// with forms and inputs

let inputname = document.getElementById("inputname");
console.log(inputname);

inputname.addEventListener("keyup", function () {
  console.log(inputname.value);
});

//! event object----------------------------->
