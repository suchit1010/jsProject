let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let leftImageSrc = "images/dice" + randomNumber1 + ".png";
let rightImageSrc = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", leftImageSrc);
document.querySelector("img.img2").setAttribute("src", rightImageSrc);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Suchit Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Priya Wins";
} else {
  document.querySelector("h1").innerHTML = "It's Draw Guys";
}

function refreshPage (){
    location.reload();
}

/*let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let leftImagesrc = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", leftImagesrc);*/