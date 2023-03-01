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

    document.getElementById("bgwhite5").style.transition = "0.8s";
    document.getElementById("bgwhite5").style.color = "white";
    document.getElementById("bgwhite5").style.backgroundColor = "black";
    document.getElementById("bgwhite5").style.border = "2px solid white";

    document.getElementById("bgwhite6").style.transition = "3s";
    document.getElementById("bgwhite6").style.color = "black";

    document.getElementById("bgwhite7").style.transition = "3s";
    document.getElementById("bgwhite7").style.color = "white";
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

    document.getElementById("bgwhite5").style.transition = "0.8s";
    document.getElementById("bgwhite5").style.color = "black";
    document.getElementById("bgwhite5").style.backgroundColor = "white";
    document.getElementById("bgwhite5").style.border = "2px solid black";

    document.getElementById("bgwhite6").style.transition = "3s";
    document.getElementById("bgwhite6").style.color = "white";

    document.getElementById("bgwhite7").style.transition = "3s";
    document.getElementById("bgwhite7").style.color = "black";
  }
}