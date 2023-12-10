const images = ["0.jpeg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html의 element를 생성함. createElement

bgImage.src = `images/${chosenImage}`; //<img src="images/img.jpg">

document.body.appendChild(bgImage); //body에 html을 추가해라
