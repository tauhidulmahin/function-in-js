// let div = document.createElement("div");
// div.innerHTML = "<mark>Hello World</mark>";
// document.body.appendChild(div);


let ul = document.createElement("ul");
ul.id = "menu";
let li1 = document.createElement("li");
li1.innerText = "Home";
ul.appendChild(li1);
let li2 = document.createElement("li");
li2.innerText = "Products";
ul.appendChild(li2);
let li3 = document.createElement("li");
li3.innerText = "About Us";
ul.appendChild(li3);
document.body.appendChild(ul);