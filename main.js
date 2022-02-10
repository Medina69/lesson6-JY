document.body.style.margin = "0 auto";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

let wr = document.createElement("div");
wr.id = "wr";
wr.style.marginLeft = "570px"
wr.style.maxWidth = "1440px";
wr.style.display = "flex";
wr.style.marginTop = "50px";


let card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.boxShadow = "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";


let bigImage = document.createElement("IMG");
bigImage.className = "bigImage";
bigImage.src = "./images/image-equilibrium.jpg";
bigImage.style.maxWidth = "300px";
bigImage.style.borderRadius = "10px";
bigImage.style.marginBottom = "3px";


let h1 = document.createElement("h3");
h1.className = "card-h1";
h1.innerText = "Equilibrium #3429";
h1.style.color = "hsl(0, 0%, 100%)";
h1.style.marginBottom = "17px";


let p = document.createElement("p");
p.className = "card-p";
p.innerText = "Our Equilibrium collection promotes balance and calm";
p.style.fontSize = "300";
p.style.marginBottom = "17px";
p.style.color = "hsl(215, 51%, 70%)";
p.style.margin = "0";
p.style.maxWidth = "300px";
p.style.lineHeight = "25px";
p.style.marginBottom = "17px";


let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "space-between";

let lorem = document.createElement("div");
lorem.className = "info";

let icon = document.createElement("img");
icon.className = "icon";
icon.src = "./images/icon-ethereum.svg";
icon.style.marginRight = "5px";

let text = document.createElement("p");
text.className = "text";
text.innerText = "0.041 ETH";
text.style.fontWeight = "bold";
text.style.marginTop = "17px;";
text.style.color = "hsl(0, 0%, 100%)";
text.style.display = "inline-block"

let clock = document.createElement("div");
clock.className = "clock";
clock.style.display = "flex";
clock.style.alignItems = "center";
clock.style.marginBottom = "17px";

let imageClock = document.createElement("img");
imageClock.className = "image-Clock";
imageClock.style.marginRight = "5px";
imageClock.src = "./images/icon-clock.svg";

let p2 = document.createElement("p");
p2.className = "p2";
p2.style.color = "hsl(215, 51%, 70%)";
p2.innerText = "3 days left";
p2.style.marginTop = "19px"

let hr = document.createElement("hr");
hr.style.borderColor = "hsl(215, 32%, 27%)";
hr.style.marginTop = "-8px";


let ava = document.createElement("div");
ava.className = "ava";
ava.style.alignItems = "center";
ava.style.marginTop = "22px";
ava.style.display = "flex";


let avaImage = document.createElement("img");
avaImage.className = "avaImage";
avaImage.src = "./images/image-avatar.png";
avaImage.style.maxWidth = "35px";
avaImage.style.marginRight = "15px";
avaImage.style.border = "2px solid white";
avaImage.style.borderRadius = "50%";


let text2 = document.createElement("span");
text2.className = "text2";
text2.innerText = "Creation of"
text2.style.fontSize = "17px"
text2.style.color = "hsl(215, 51%, 70%)";
text2.style.textAlign = "center";


let user = document.createElement("span");
user.className = "user";
user.style.color = "white";
user.innerText = " Jules Wyvern";

document.body.appendChild(wr);
wr.appendChild(card);
card.appendChild(bigImage);
card.appendChild(h1);
card.appendChild(p);
card.appendChild(div);
div.appendChild(lorem);
lorem.appendChild(icon);
lorem.appendChild(text);
div.appendChild(clock);
clock.appendChild(imageClock);
clock.appendChild(p2);
card.appendChild(hr);
card.appendChild(ava);
ava.appendChild(avaImage);
ava.appendChild(text2);
text2.appendChild(user);

alert("Я оцениваю свою работу на 110 баллов")