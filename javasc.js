var num = Math.random()*6;
num=Math.floor(num);
num+=1;
var imagenum= "./images/dice" +num+ ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagenum);

var num2 = Math.random()*6;
num2=Math.floor(num2);
num2+=1;
var imagenum2= "./images/dice" +num2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imagenum2);

if(num>num2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins.";
}
else if(num2>num)
{
    document.querySelector("h1").innerHTML="🚩Player 2 Wins.";
}
else
{
    document.querySelector("h1").innerHTML="TIE";
}