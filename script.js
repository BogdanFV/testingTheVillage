const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var date = new Date();
var dd = date.getDate();
if (dd < 10) dd = '0' + dd;
var mm = date.getMonth();
var yy = date.getFullYear();
if (yy < 10) yy = '0' + yy;
document.getElementsByClassName("current-date")[0].innerHTML = (dd + ' ' + monthNames[mm] + ' ' + yy);

var amountOfClicks = 0;
var firstTime = 1;
var timeOfClicking = 1;
var result = 1;
var heartImage = document.getElementById('heart-image');
heartImage.onclick = function(){

    if(amountOfClicks == 0){
        firstTime = new Date()
    }
    this.style.height = '110%';
    this.style.width = '110%';
    setTimeout(() => { 
        this.style.height = '382px';
        this.style.width = '279px';
    }, 200);
    amountOfClicks++;

    if((Math.floor((amountOfClicks / (new Date() - firstTime)) * 60000)) !== Infinity){
        document.getElementById("heart-beats").innerHTML = 
        (Math.floor((amountOfClicks / (new Date() - firstTime)) * 60000));
    } else(document.getElementById("heart-beats").innerHTML = 100);
}

document.getElementById('first-game__button').onclick = function() {
    document.getElementById('main-block-first-game').classList.add('hidden');
    document.getElementById('meta-block-first-game').classList.add('hidden');
    document.getElementById('first-answer-block').classList.remove('hidden');
}
document.getElementById('first-ending').onclick = function() {
  document.getElementById('first-answer-block').classList.add('hidden');
  document.getElementById('main-block-second-game').classList.remove('hidden');
  document.getElementById('meta-block-second-game').classList.remove('hidden');
}
document.getElementById('second-game__button').onclick = function() {
    document.getElementById('main-block-second-game').classList.add('hidden');
    document.getElementById('meta-block-second-game').classList.add('hidden');
    document.getElementById('second-answer-block').classList.remove('hidden');
}
document.getElementById('second-ending').onclick = function() {
  document.getElementById('second-answer-block').classList.add('hidden');
  document.getElementById('main-block-third-game').classList.remove('hidden');
  document.getElementById('meta-block-third-game').classList.remove('hidden');
}
document.getElementById('tonometer').onclick = function() {
  document.getElementById('main-block-third-game').classList.add('hidden');
  document.getElementById('meta-block-third-game').classList.add('hidden');
  document.getElementById('third-answer-block').classList.remove('hidden');
}
document.getElementById('third-game__button').onclick = function() {
  document.getElementById('main-block-third-game').classList.add('hidden');
  document.getElementById('meta-block-third-game').classList.add('hidden');
  document.getElementById('third-answer-block').classList.remove('hidden');
}
document.getElementById('third-ending').onclick = function() {
  document.getElementById('third-answer-block').classList.add('hidden');
  document.getElementById('main-block-fourth-game').classList.remove('hidden');
  document.getElementById('meta-block-fourth-game').classList.remove('hidden');
}

document.getElementById('fourth-game__button').onclick = function() {
  document.getElementById('main-block-fourth-game').classList.add('hidden');
  document.getElementById('meta-block-fourth-game').classList.add('hidden');
  document.getElementById('fourth-answer-block').classList.remove('hidden');
}
document.getElementById('fourth-ending').onclick = function() {
  document.getElementById('fourth-answer-block').classList.add('hidden');
  document.getElementById('main-block-fifth-game').classList.remove('hidden');
  document.getElementById('meta-block-fifth-game').classList.remove('hidden');
}


dragElement(document.getElementById(("first-heart-part")));
dragElement(document.getElementById(("second-heart-part")));
dragElement(document.getElementById(("third-heart-part")));
dragElement(document.getElementById(("fourth-heart-part")));
dragElement(document.getElementById(("fifth-heart-part")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      switch(elmnt.id){
        case "first-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetLeft - pos1 < 250 ) {
              elmnt.style.top = "65px";
              elmnt.style.left = "185px";
            } else {
              elmnt.style.top = "301px";
              elmnt.style.left = "437px";
            }
            break;
        case "second-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetLeft - pos1 < 250 ) {
              elmnt.style.top = "235px";
              elmnt.style.left = "185px";
            } else {
              elmnt.style.top = "69px";
              elmnt.style.left = "434px";
            }
            break;
        case "third-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 400 ) {
              elmnt.style.top = "148px";
              elmnt.style.left = "315px";
            } else {
              elmnt.style.top = "415px";
              elmnt.style.left = "147px";
            }
            break;
        case "fourth-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 400 ) {
              elmnt.style.top = "70px";
              elmnt.style.left = "260px";
            } else {
              elmnt.style.top = "309px";
              elmnt.style.left = "28px";
            }
            break;
        case "fifth-heart-part":
            if(elmnt.offsetTop - pos2 > 200 && elmnt.offsetTop - pos2 < 600 &&  elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 500) {
              elmnt.style.top = "220px";
              elmnt.style.left = "300px";
            } else {
              elmnt.style.top = "47px";
              elmnt.style.left = "38px";
            }
            break;
      }
    }
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

let isMoving = false;
let x = 0;
let y = 0;
const context = myPics.getContext('body-img-cover');
const myPic = document.getElementById('small-heart');

myPic.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isMoving = true;
});

myPic.addEventListener('mousemove', e => {
  if (isMoving === true) {
    smallHeart.style.opacity = "30%";
    smallHeart.style.cursor = "pointer";
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isMoving === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isMoving = false;
  }
});

dragHeart(document.getElementById(("small-heart")));
function dragHeart(smallHeart) {
  console.log("kekekk");
  smallHeart.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    console.log("dragMouseDown");
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {
    console.log("elementDrag");
    smallHeart.style.opacity = "30%";
    smallHeart.style.cursor = "pointer";
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if(smallHeart.offsetTop - pos2 > 250 && smallHeart.offsetLeft - pos1 > 250){
      smallHeart.style.top = "300px";
      smallHeart.style.left = "300px";
    }
  }

  function closeDragElement() {
    console.log("closeDragElement");
    smallHeart.style.opacity = "100%";
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
var errorMechanismFirst = document.getElementById('thermometer');
var errorMechanismSecond = document.getElementById('player');
errorMechanismFirst.onclick = function() {
  document.getElementById('meta-block-third-game').style.backgroundColor = "#ffcbca"

  setTimeout(() => { 
    document.getElementById('meta-block-third-game').style.backgroundColor = "#F2FBF7"

  }, 200);
}
errorMechanismSecond.onclick = function() {
  document.getElementById('meta-block-third-game').style.backgroundColor = "#ffcbca"

  setTimeout(() => { 
    document.getElementById('meta-block-third-game').style.backgroundColor = "#F2FBF7"

  }, 200);
}

var amountOfBlood = 1;
document.getElementById('body-size').innerHTML = amountOfBlood;
document.getElementById('bottle__button').onclick = function(){
  if(amountOfBlood < 5){
    amountOfBlood++;
  } else {
    amountOfBlood = 1;
  }
  document.getElementById('body-size').innerHTML = amountOfBlood;
  switch(amountOfBlood){
    case 1:
      document.getElementById('bottle-5').classList.add('hidden');
      document.getElementById('bottle-1').classList.remove('hidden');
      break;
    case 2:
      document.getElementById('bottle-1').classList.add('hidden');
      document.getElementById('bottle-2').classList.remove('hidden');
      break;
    case 3:
      document.getElementById('bottle-2').classList.add('hidden');
      document.getElementById('bottle-3').classList.remove('hidden');
      break;
    case 4:
      document.getElementById('bottle-3').classList.add('hidden');
      document.getElementById('bottle-4').classList.remove('hidden');
      break;
    case 5:
      document.getElementById('bottle-4').classList.add('hidden');
      document.getElementById('bottle-5').classList.remove('hidden');
      break;
  }
}
