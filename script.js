const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
                    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
var date = new Date();
var dd = date.getDate();
if (dd < 10) dd = '0' + dd;
var mm = date.getMonth();
var yy = date.getFullYear();
if (yy < 10) yy = '0' + yy;
document.getElementsByClassName("current-date")[0].innerHTML = (dd + ' ' + monthNames[mm] + ' ' + yy);

var heartImage = document.getElementById('heart-image');
var amountOfClicks = 0;
var firstTime = 1;
var timeOfClicking = 1;
var result = 1;
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
    document.getElementById('first-block').classList.add('hidden');
    document.getElementById('second-block').classList.add('hidden');
    document.getElementById('first-answer-block').classList.remove('hidden');
}