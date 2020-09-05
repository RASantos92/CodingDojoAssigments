console.log(document)

var h1 = document.getElementsByTagName("h1");

console.log(h1);

var title = document.getElementById("title");
console.log(title.innerHTML);
title.innerHTML = "This is coming from javaScript!";

var boxen = document.getElementsByClassName("box");
console.log(boxen);

for(let i = 0; i < boxen.length; i++){
    boxen[i].innerHTML = "This is a box";
    boxen[i].style.padding = "10px";
    console.log(i);
    boxen[i].draggable = true;
    boxen[i].id = i;
    boxen[i].addEventListener("mouseover",function(){
        this.style.backgroundColor = "orange";
    })
    boxen[i].addEventListener("mouseout",function(){
        this.style.backgroundColor = "rebeccapurple";
    })
}


var content = document.getElementById("content");

var users = [
    {
        name: "Adrien",
        age: 38,
        email : "adion@codingdojo.com"
    },
    {
        name: "Anne",
        age: 31,
        email : "ajurack@codingdojo.com"
    }
]

for(let x = 0; x < users.length; x++){
    var card = document.createElement("div");
    card.className = "card";
    var h2 = document.createElement("h2");
    h2.innerHTML = users[x].name;
    var p = document.createElement("p");
    p.innerHTML = users[x].email;
    card.appendChild(h2);
    card.appendChild(p);
    content.appendChild(card);
}
