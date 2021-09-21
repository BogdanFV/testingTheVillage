
/* Page time */ 
const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var date = new Date();
var dd = date.getDate();
if (dd < 10) dd = '0' + dd;
var mm = date.getMonth();
var yy = date.getFullYear();
if (yy < 10) yy = '0' + yy;
document.getElementsByClassName("current-date")[0].innerHTML = (dd + ' ' + monthNames[mm] + ' ' + yy);

/* Block change */ 
document.getElementById('first-game__button').onclick = function() {
    document.getElementById('main-block-appearance-first').classList.add('hidden');
    document.getElementById('first-answer-block').classList.remove('hidden');
}
document.getElementById('first-ending').onclick = function() {
  document.getElementById('first-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-second').classList.remove('hidden');
}
document.getElementById('second-game__button').onclick = function() {
    document.getElementById('main-block-appearance-second').classList.add('hidden');
    document.getElementById('second-answer-block').classList.remove('hidden');
}
document.getElementById('second-ending').onclick = function() {
  document.getElementById('second-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-third').classList.remove('hidden');
}
document.getElementById('tonometer').onclick = function() {
  document.getElementById('main-block-appearance-third').classList.add('hidden');
  document.getElementById('third-answer-block').classList.remove('hidden');
}
document.getElementById('third-game__button').onclick = function() {
  document.getElementById('main-block-appearance-third').classList.add('hidden');
  document.getElementById('third-answer-block').classList.remove('hidden');
}
document.getElementById('third-ending').onclick = function() {
  document.getElementById('third-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-fourth').classList.remove('hidden');
}
document.getElementById('fourth-game__button').onclick = function() {
  document.getElementById('main-block-appearance-fourth').classList.add('hidden');
  document.getElementById('fourth-answer-block').classList.remove('hidden');
}
document.getElementById('fourth-ending').onclick = function() {
  document.getElementById('fourth-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-fifth').classList.remove('hidden');
}
document.getElementById('fifth-game__button').onclick = function() {
  document.getElementById('main-block-appearance-fifth').classList.add('hidden');
  document.getElementById('fifth-answer-block').classList.remove('hidden');
}
document.getElementById('fifth-ending').onclick = function() {
  document.getElementById('fifth-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-sixth').classList.remove('hidden');
}
document.getElementById('sixth-game__button').onclick = function() {
  document.getElementById('meta-block-sixth-game').style.backgroundColor = "#dbffc2"
  setTimeout(() => { 
    document.getElementById('main-block-appearance-sixth').classList.add('hidden');
    document.getElementById('sixth-answer-block').classList.remove('hidden');
    document.getElementById('meta-block-sixth-game').style.backgroundColor = "#F3FFFF";
  }, 200);
}
document.getElementById('sixth-ending').onclick = function() {
  document.getElementById('sixth-answer-block').classList.add('hidden');
  document.getElementById('main-block-appearance-first').classList.remove('hidden');
}


/* First game*/ 
var amountOfClicks = 0;
var firstTime = 1;
var timeOfClicking = 1;
var result = 1;

document.getElementById('heart-image-cover').onclick = function(){
  setTimeout(() => { 
    this.style.height = '23.875rem';
    this.style.width = '17.438rem';
}, 200);
this.style.height = '26.265rem';
this.style.width = '19.182rem';
};

var heartImage = document.getElementById('heart-image');
heartImage.onclick = function(){

    if(amountOfClicks == 0){
        firstTime = new Date()
    }
    setTimeout(() => { 
        this.style.height = '23.875rem';
        this.style.width = '17.438rem';
    }, 200);
    this.style.height = '26.265rem';
    this.style.width = '19.182rem';
    amountOfClicks++;

    if((Math.floor((amountOfClicks / (new Date() - firstTime)) * 60000)) !== Infinity){
        document.getElementById("heart-beats").innerHTML = 
        (Math.floor((amountOfClicks / (new Date() - firstTime)) * 60000));
    } else(document.getElementById("heart-beats").innerHTML = 100);
}


/* Second game*/ 
dragHeartPart(document.getElementById(("first-heart-part")));
dragHeartPart(document.getElementById(("second-heart-part")));
dragHeartPart(document.getElementById(("third-heart-part")));
dragHeartPart(document.getElementById(("fourth-heart-part")));
dragHeartPart(document.getElementById(("fifth-heart-part")));

var firstPart = false;
var secondPart = false;
var thirdPart = false;
var fourthPart = false;
var fifthPart = false;

function dragHeartPart(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      
    }
    function elementDrag(e) {
      if(!rightAnswer){
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
      switch(elmnt.id){
        case "first-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetLeft - pos1 < 250 ) {
              elmnt.style.top = "65px";
              elmnt.style.left = "185px";
              firstPart = true;
            } else {
              elmnt.style.top = "301px";
              elmnt.style.left = "437px";
              firstPart = false;
            }
            break;
        case "second-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 0 && elmnt.offsetLeft - pos1 < 250 ) {
              elmnt.style.top = "235px";
              elmnt.style.left = "185px";
              secondPart = true;
            } else {
              elmnt.style.top = "69px";
              elmnt.style.left = "434px";
              secondPart = false;
            }
            break;
        case "third-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 400 ) {
              elmnt.style.top = "148px";
              elmnt.style.left = "315px";
              thirdPart = true;
            } else {
              elmnt.style.top = "415px";
              elmnt.style.left = "147px";
              thirdPart = false;
            }
            break;
        case "fourth-heart-part":
            if(elmnt.offsetTop - pos2 > 0 && elmnt.offsetTop - pos2 < 250 && elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 400 ) {
              elmnt.style.top = "70px";
              elmnt.style.left = "260px";
              fourthPart = true;
            } else {
              elmnt.style.top = "309px";
              elmnt.style.left = "28px";
              fourthPart = false;
            }
            break;
        case "fifth-heart-part":
            if(elmnt.offsetTop - pos2 > 200 && elmnt.offsetTop - pos2 < 600 &&  elmnt.offsetLeft - pos1 > 250 && elmnt.offsetLeft - pos1 < 500) {
              elmnt.style.top = "220px";
              elmnt.style.left = "300px";
              fifthPart = true;
            } else {
              elmnt.style.top = "47px";
              elmnt.style.left = "38px";
              fifthPart = false;
            }
            break;
      }
      if(firstPart*secondPart*thirdPart*fourthPart*fifthPart){
        document.getElementById('meta-block-second-game').style.backgroundColor = "#dbffc2"
        setTimeout(() => { 
          document.getElementById('meta-block-second-game').style.backgroundColor = "#F0F4FE";
        }, 200);
      }
      document.onmouseup = null;
      document.onmousemove = null;
    }
}
  
/* Third game*/ 
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


/* Fourth game*/ 
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

/* Fifth game*/ 
dragHeart(document.getElementById("small-heart"));
var rightAnswer = false;

function dragHeart(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    if(!rightAnswer){
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    if(!rightAnswer){
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    if((elmnt.offsetTop - pos2) > 204 && (elmnt.offsetTop - pos2) < 324 && 
      (elmnt.offsetLeft - pos1) > 234 && (elmnt.offsetLeft - pos1) < 294){
      elmnt.style.top = "264px";
      elmnt.style.left = "264px";
      document.getElementById('meta-block-fifth-game').style.backgroundColor = "#dbffc2"
  
      setTimeout(() => { 
        document.getElementById('meta-block-fifth-game').style.backgroundColor = "#f8fff3"
      }, 200);
      rightAnswer = true;
    } else{
      elmnt.style.top = "60px";
      elmnt.style.left = "59px";
      document.getElementById('meta-block-fifth-game').style.backgroundColor = "#ffcbca"
  
      setTimeout(() => { 
        document.getElementById('meta-block-fifth-game').style.backgroundColor = "#f8fff3"
      }, 200);
    }
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/* Moving blocks*/ 
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  var elems = document.getElementsByClassName('main-block-game');
  if (pageYOffset < 1880){
    for (var i = 0; i < elems.length; i++){
      elems[i].style.position = "absolute";
      elems[i].style.top = "0";
    }
  } else if(pageYOffset > 1880 && pageYOffset < 2218){
    for (var i = 0; i < elems.length; i++){
      elems[i].style.position = "fixed";
      elems[i].style.top = "0";
    }
  } else if(pageYOffset > 2218){
    for (var i = 0; i < elems.length; i++){
      elems[i].style.position = "absolute";
      elems[i].style.top = "335px";
    }
  };
});
