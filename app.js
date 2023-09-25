// ELEMENTS STORAGE
const box1 = document.querySelector("[data-id='box1']");
const box2 = document.querySelector("[data-id='box2']");
const box3 = document.querySelector("[data-id='box3']");
const box4 = document.querySelector("[data-id='box4']");
const allBox = document.querySelectorAll(".box");
const resetButton = document.querySelector("[data-id='reset-btn']");
const body = document.querySelector("body");
const matrixButton = document.querySelector("[data-id='matrix-btn']");

// IMAGES VARIABLE
let images1 = [
  "images/New folder/pngwing.com.png",
  "images/New folder/pngwing.com(1).png",
  "images/New folder/pngwing.com(2).png",
  "images/New folder/pngwing.com(3).png",
  "images/New folder/pngwing.com(4).png",
  "images/New folder/pngwing.com(5).png",
  "images/New folder/pngwing.com(6).png",
  "images/New folder/pngwing.com(7).png",
  "images/New folder/pngwing.com(8).png",
  "images/New folder/pngwing.com(9).png",
  "images/New folder/pngwing.com(10).png",
  "images/New folder/pngwing.com(11).png",
  "images/New folder/pngwing.com(12).png",
];

let images2 = [
  "Quran/pngwing.com(16).png",
  "Quran/pngwing.com(17).png",
  "Quran/pngwing.com(18).png",
  "Quran/pngwing.com(19).png",
  "Quran/pngwing.com(20).png",
  "Quran/pngwing.com(21).png",
];

let images3 = [
  "mosque/pngwing.com(1).png",
  "mosque/pngwing.com(2).png",
  "mosque/pngwing.com(3).png",
  "mosque/pngwing.com(4).png",
  "mosque/pngwing.com(5).png",
  "mosque/pngwing.com(6).png",
  "mosque/pngwing.com(7).png",
];

let images4 = [
  "jihad/pngwing.com(8).png",
  "jihad/pngwing.com(9).png",
  "jihad/pngwing.com(10).png",
  "jihad/pngwing.com(11).png",
  "jihad/pngwing.com(12).png",
  "jihad/pngwing.com(13).png",
  "jihad/pngwing.com(14).png",
  "jihad/pngwing.com(15).png",
];
// BOX FUNCTIONS

function test1() {
  box1.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * images1.length);
    let randomImages = images1[randomIndex];
    let imgElement = document.createElement("img");
    imgElement.src = randomImages;
    imgElement.alt = "islam";
    imgElement.width = 150;
    imgElement.height = 150;

    if (box1.hasChildNodes()) {
      box1.removeChild(box1.firstChild).appendChild(imgElement);
    }

    box1.appendChild(imgElement);
  });
}

function test2() {
  box2.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * images2.length);
    let randomImages = images2[randomIndex];
    let imgElement = document.createElement("img");
    imgElement.src = randomImages;
    imgElement.alt = "islam";
    imgElement.width = 150;
    imgElement.height = 150;

    if (box2.hasChildNodes()) {
      box2.removeChild(box2.firstChild).appendChild(imgElement);
    }
    box2.appendChild(imgElement);
  });
}

function test3() {
  box3.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * images3.length);
    let randomImages = images3[randomIndex];
    let imgElement = document.createElement("img");
    imgElement.src = randomImages;
    imgElement.alt = "islam";
    imgElement.width = 150;
    imgElement.height = 150;

    if (box3.hasChildNodes()) {
      box3.removeChild(box3.firstChild).appendChild(imgElement);
    }
    box3.appendChild(imgElement);
  });
}

function test4() {
  box4.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * images4.length);
    let randomImages = images4[randomIndex];
    let imgElement = document.createElement("img");
    imgElement.src = randomImages;
    imgElement.alt = "islam";
    imgElement.width = 150;
    imgElement.height = 150;

    if (box4.hasChildNodes()) {
      box4.removeChild(box4.firstChild).appendChild(imgElement);
    }
    box4.appendChild(imgElement);
  });
}

// BUTTON FUNCTIONS

function testButton() {
  resetButton.addEventListener("click", () => {
    switch (true) {
      case box1.hasChildNodes() ??
        box2.hasChildNodes() ??
        box3.hasChildNodes() ??
        box4.hasChildNodes():
        box1.removeChild(box1.firstChild);
        box2.removeChild(box2.firstChild);
        box3.removeChild(box3.firstChild);
        box4.removeChild(box4.firstChild);
        break;
      case box1.hasChildNodes():
        box1.removeChild(box1.firstChild);
        break;

      case box2.hasChildNodes():
        box2.removeChild(box2.firstChild);
        break;

      case box3.hasChildNodes():
        box3.removeChild(box3.firstChild);
        break;

      case box4.hasChildNodes():
        box4.removeChild(box4.firstChild);
        break;

      default:
        alert("YOU HAVE NOT CLICKED ANY BOX");
        break;
    }
  });
}

function testButton2() {
  matrixButton.addEventListener("click", () => {
    body.classList.toggle("bodystyle");
    allBox.forEach((e) => {
      e.classList.toggle("stylebox");
    });
    console.log("hi");

    body.classList.contains("bodystyle") === true
      ? (matrixButton.textContent = "OFF CODE MODE")
      : (matrixButton.textContent = "ON CODE MODE");
  });
}

// INITIALISATION OF FUNCTIONS
test1();
test2();
test3();
test4();
testButton();
testButton2();
