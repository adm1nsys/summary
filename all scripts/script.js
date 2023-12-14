function myFunction1() {
    var x = document.getElementById("themeico");
  if (document.getElementById("themeico").style.background === "white") {
    document.getElementById("themeico").style.transition = "0.8s";
    document.getElementById("themeico1").style.transition = "2s";
    document.getElementById("themeico").style.background = "black";
    // document.getElementById("themeico1").style.animation = "anim2 2s alternate";
    document.getElementById("themeico1").style.transform = "rotate(-360deg)";
    document.getElementById("themeico1").style.backgroundImage = "../img/l1.png";
    document.getElementById("themeico").style.boxShadow = "0px 0px 20px white";

    document.getElementById("bgwhite").style.transition = "0.8s";
    document.getElementById("bgwhite").style.background = "black";
    document.getElementById("bgwhite").style.backgroundColor = "black";
    document.getElementById("bgwhite").style.color = "white";

    document.getElementById("bgwhite2").style.transition = "0.8s";
    document.getElementById("bgwhite2").style.backgroundColor = "rgba(20, 20, 20, 1)";
    document.getElementById("bgwhite2").style.background = "rgba(20, 20, 20, 1)";

    document.getElementById("bgwhite3").style.transition = "3s";
    document.getElementById("bgwhite3").style.color = "white";

    document.getElementById("bgwhite4").style.transition = "3s";
    document.getElementById("bgwhite4").style.color = "rgba(200, 200, 200, 1)";

    // document.getElementsByClassName("link").style.transition = "0.8s";
    // document.getElementsByClassName("link").style.color = "white";
    // document.getElementsByClassName("link").style.backgroundColor = "black";
    // document.getElementsByClassName("link").style.border = "2px solid white";

const allOrangeJuiceByClass = document.getElementsByClassName("link");
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass[i].style.transition = "0.8s";
  allOrangeJuiceByClass[i].style.color = "white";
  allOrangeJuiceByClass[i].style.backgroundColor = "black";
  allOrangeJuiceByClass[i].style.border = "5px solid white";
}

const allOrangeJuiceByClass2 = document.getElementsByClassName("link2");
for (let i = 0; i < allOrangeJuiceByClass2.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass2[i].style.transition = "0.8s";
  allOrangeJuiceByClass2[i].style.color = "white";
  allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  allOrangeJuiceByClass2[i].style.border = "5px solid white";
}

// 

const allOrangeJuiceByClass3 = document.getElementsByClassName("m1");
for (let i = 0; i < allOrangeJuiceByClass3.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass3[i].style.transition = "0.8s";
  allOrangeJuiceByClass3[i].style.color = "white";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass4 = document.getElementsByClassName("m2");
for (let i = 0; i < allOrangeJuiceByClass4.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass4[i].style.transition = "0.8s";
  allOrangeJuiceByClass4[i].style.color = "white";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}


const allOrangeJuiceByClass5 = document.getElementsByClassName("p3");
for (let i = 0; i < allOrangeJuiceByClass5.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass5[i].style.transition = "0.8s";
  allOrangeJuiceByClass5[i].style.color = "white";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass6 = document.getElementsByClassName("p2");
for (let i = 0; i < allOrangeJuiceByClass6.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass6[i].style.transition = "0.8s";
  allOrangeJuiceByClass6[i].style.color = "white";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass7 = document.getElementsByClassName("p1");
for (let i = 0; i < allOrangeJuiceByClass7.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass7[i].style.transition = "0.8s";
  allOrangeJuiceByClass7[i].style.color = "white";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

    // document.getElementById("bgwhite6").style.transition = "3s";
    // document.getElementById("bgwhite6").style.color = "black";

    // document.getElementById("bgwhite7").style.transition = "3s";
    // document.getElementById("bgwhite7").style.color = "white";
  } else {
    document.getElementById("themeico").style.transition = "0.8s";
    document.getElementById("themeico1").style.transition = "2s";
    // document.getElementById("themeico1").style.animation = "anim1 2s alternate";
    document.getElementById("themeico1").style.transform = "rotate(360deg)";
    document.getElementById("themeico").style.background = "white";
    document.getElementById("themeico1").style.backgroundImage = "../img/l2.png";
    document.getElementById("themeico").style.boxShadow = "0px 0px 20px black";

    document.getElementById("bgwhite").style.transition = "0.8s";
    document.getElementById("bgwhite").style.background = "white";
    document.getElementById("bgwhite").style.backgroundColor = "white";
    document.getElementById("bgwhite").style.color = "black";

    document.getElementById("bgwhite2").style.transition = "0.8s";
    document.getElementById("bgwhite2").style.backgroundColor = "rgba(20, 20, 20, 0.3)";
    document.getElementById("bgwhite2").style.background = "rgba(20, 20, 20, 0.3)";

    document.getElementById("bgwhite3").style.transition = "3s";
    document.getElementById("bgwhite3").style.color = "rgba(20, 20, 20, 1)";

    document.getElementById("bgwhite4").style.transition = "3s";
    document.getElementById("bgwhite4").style.color = "rgba(20, 20, 20, 1)";

    // document.getElementsByClassName("link").style.transition = "0.8s";
    // document.getElementsByClassName("link").style.color = "black";
    // document.getElementsByClassName("link").style.backgroundColor = "white";
    // document.getElementsByClassName("link").style.border = "2px solid black";

    const allOrangeJuiceByClass = document.getElementsByClassName("link");
for (let i = 0; i < allOrangeJuiceByClass.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass[i].style.transition = "0.8s";
  allOrangeJuiceByClass[i].style.color = "black";
  allOrangeJuiceByClass[i].style.backgroundColor = "white";
  allOrangeJuiceByClass[i].style.border = "5px solid black";
}

    const allOrangeJuiceByClass2 = document.getElementsByClassName("link2");
for (let i = 0; i < allOrangeJuiceByClass2.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass2[i].style.transition = "0.8s";
  allOrangeJuiceByClass2[i].style.color = "black";
  allOrangeJuiceByClass2[i].style.backgroundColor = "white";
  allOrangeJuiceByClass2[i].style.border = "5px solid black";
}

const allOrangeJuiceByClass3 = document.getElementsByClassName("m1");
for (let i = 0; i < allOrangeJuiceByClass3.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass3[i].style.transition = "0.8s";
  allOrangeJuiceByClass3[i].style.color = "black";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass4 = document.getElementsByClassName("m2");
for (let i = 0; i < allOrangeJuiceByClass4.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass4[i].style.transition = "0.8s";
  allOrangeJuiceByClass4[i].style.color = "black";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass5 = document.getElementsByClassName("p3");
for (let i = 0; i < allOrangeJuiceByClass5.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass5[i].style.transition = "0.8s";
  allOrangeJuiceByClass5[i].style.color = "black";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass6 = document.getElementsByClassName("p2");
for (let i = 0; i < allOrangeJuiceByClass6.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass6[i].style.transition = "0.8s";
  allOrangeJuiceByClass6[i].style.color = "black";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

const allOrangeJuiceByClass7 = document.getElementsByClassName("p1");
for (let i = 0; i < allOrangeJuiceByClass7.length; i++) {
  // result += `allOrangeJuiceByClass.textContent`;
  allOrangeJuiceByClass7[i].style.transition = "0.8s";
  allOrangeJuiceByClass7[i].style.color = "black";
  // allOrangeJuiceByClass2[i].style.backgroundColor = "black";
  // allOrangeJuiceByClass2[i].style.border = "2px solid white";
}

    // document.getElementById("bgwhite6").style.transition = "3s";
    // document.getElementById("bgwhite6").style.color = "white";

    // document.getElementById("bgwhite7").style.transition = "3s";
    // document.getElementById("bgwhite7").style.color = "black";
  }
}

