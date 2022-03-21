// select the element and deciude wht effect what to do !!!

// may dofferent ways, there  are different selectors!!

document.body.style.backgroundColor = "blue ";
document.body.style.color = "magenta";
const elemento = (document.getElementById("btn").style.color = "magenta");

const boton = document.getElementById("btn");
console.log(boton);

const name = boton.nodeName;
console.log(name);

const css = boton.style;
console.log(css);

console.log(window);

// first oits the window, that is the tab that we use.  next we use the
// document.  represent the doucment we have!!!!!
// ! here we can see all atributes !!
console.dir(document);

const h1 = document.getElementById("titulo");
h1.style.color = "yellow";
h1.style.textShadow = "1px 20px 20px  pink";

const heading = document.getElementsByTagName("h2");
console.log(heading);
heading[0].style.color = "green ";

const items = document.getElementsByTagName("li");
console.log(items);

// ! spread operator we can convert to  array!!
const betteritems = [...items];
console.log(betteritems);

console.log(
  betteritems.map((item) => {
    return item;
  })
);
//!  ============

// span

const span = document.getElementById("aqui");
console.log(span);

// ! ============

const result = document.querySelector("#result");
result.style.backgroundColor = "green ";

const resultin = document.querySelector(".resultin");
resultin.style.color = " pink ";

//  querre selectorall, we can use for each!!!! really powerrfull
const list = document.querySelectorAll(".list");
console.log(list);
list.forEach(function (item) {
  console.log(item);
  return (item.style.color = "green");
});

// !child and childnotes !!! CHIOLNODES!!!

const hijos = document.querySelector(".resultin");

const children = hijos.children;
console.log(children);
children[5].style.color = "greenyellow";

// ! PARENT  ver la clasificacion de los padrs s

const spani = document.querySelector("#lookingparent");
const padrecito = spani.parentElement.parentElement;
padrecito.style.backgroundColor = "yellow";

//!  prevsibling and nextsibling  use elemente, por e whiteSpace!!!!

const primerin = document.querySelector(".primerin");
console.log(primerin);
primerin.nextSibling.nextSibling.style.color = "black"; // aqui ojo hay que especificar el sigiente del siguiente x

const lasty = document.querySelector("#lasty");
console.log(lasty);
lasty.previousSibling.previousSibling.style.backgroundColor = "green";
lasty.previousSibling.previousSibling.style.color = "yellow";

// ! using node value!!  and textContent
const spaniski = document.querySelector(".spaniski");
console.log(spaniski);
const queDice = spaniski.textContent;
console.log(queDice);

const quedice2 = spaniski.firstChild.nodeValue;
console.log(quedice2);

quedice2.innerHtml = "Hola";

//!!!! get atribute and setatribute

//  we can set the atributes(( we obtain the atribute and we attach it to a  variable ))
// ? we get the name of atribute.......

const variablee = document.querySelector("#specialiski");

const classValue = variablee.getAttribute("id");
console.log(classValue);

const primerski = document.querySelectorAll(".primeriski");
console.log(primerski);

const linky = document.querySelector("#link");
console.log(linky);
const linklist = linky.nextElementSibling;
console.log(linklist);

// aqui nombramos una clase al elemento que no tenia!! con el set atributes y podemos cambiar su valor dinamicamente!!!
linklist.setAttribute("class", "aver_que_ se_pone");
linklist.textContent = " aqui va cambiar  texto !!!!";

// ================== CLASSNAME AND CLASSLIST

const firsty = document.getElementById("primero");
const second = document.getElementById("segundo");
const thirdy = document.getElementById("tercero");

const classValuee = firsty.className; // CLASSNAME. CLASSNAME  we use for know which class name have
console.log(classValuee);

// logic if the  the id primero is there  called autmatically  the variable second with the clasname of colors and  as we set in css file the color must change
if (classValue) {
  second.className = "colors";
}

// classlist .  we must use () instedd ==
//! and  we can not overwrite!!!!  better to remove, add and

thirdy.classList.add("colors");
thirdy.classList.add("text");

const newTag = document.querySelector(".colores");
console.log(newTag);

newTag.classList.add("colorin");

//! CREATEELEMENT,  CREATE TEXTNODE , ,  ELEMENT.APPENCHILD
const resultadooo = document.querySelector("#examples");
console.log(examples);

// create empty element.
const empty = document.createElement("h2");

// create text node
const textnode = document.createTextNode("Este es el textod del h2 ");
console.log(textnode);
// insert into the empty the content con appendChild
empty.appendChild(textnode);
// inserto into the body od document now

// document.body.appendChild(empty); lo borre para seguir !!

//? now with the examples

const empty2 = document.createElement("h6");
console.log(empty2);
const textNode2 = document.createTextNode(
  "hoal esto esl texto del nuevo d tag "
);
empty2.appendChild(textNode2);
// crearele clase al nuevo tag
empty2.classList.add("azul");
resultadooo.appendChild(empty2);

// veriifcar los hijos del principal que es resultadoo

console.log(examples.children);

// ! insert before!!!!!!
// parametyers
// insertBefor( element, location )

const empty3 = document.createElement("h4");
const textnode3 = document.createTextNode("este es el texto para insertbefore");
empty3.appendChild(textnode3);
document.body.insertBefore(empty3, resultadooo);
empty3.classList.add("colorcito");
empty3.style.color = "yellow ";

//!  replace child
const smallheading = document.createElement("h5");
const textheading = document.createTextNode(
  "este es nuevo texto para el small heading  "
);
smallheading.appendChild(textheading);
smallheading.classList.add("azul");
document.body.replaceChild(smallheading, empty3);

// prepend , inner text!! quicker to insert text!!!

// lo pone antes del documento empiece

const heder = document.createElement("h4");
heder.innerText = " hola este es inner text ";
document.body.prepend(heder);
heder.classList.add("azul");
