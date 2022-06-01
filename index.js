var fP = prompt("Enter The Name Of First Player : ");
var sP = prompt("Enter The Name Of Second Player : ");

document.querySelectorAll("p")[0].innerHTML= fP;
document.querySelectorAll("p")[1].innerHTML= sP;

var randNo1 = Math.floor(Math.random()*6)+1;
var comRandNo1 =  "images/dice" + randNo1 + ".png";
document.querySelectorAll("div img")[0].setAttribute("src",comRandNo1);

var randNo2 = Math.floor(Math.random()*6)+1;
var comRandNo2 =  "images/dice" + randNo2 + ".png";
document.querySelectorAll("div img")[1].setAttribute("src",comRandNo2);

if(randNo1 > randNo2)
{
   document.querySelector("h2").innerHTML=" 🙌 " + fP + " Won.."
}
else if (randNo1 < randNo2) {
    document.querySelector("h2").innerHTML= sP + " Won..🙌 ."}
else 
{
    document.querySelector("h2").innerHTML="Draw.!😃"
}