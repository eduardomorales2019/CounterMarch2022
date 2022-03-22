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
function alertFunction() {
  alert("hola");
}

const btn = document.querySelector("#boton");
console.log(btn);
btn.addEventListener("click", alertFunction);

// function reference !!!
