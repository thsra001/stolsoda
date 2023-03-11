var sizes = [5,10,15,20,50,100,200,250,500,1000]
var r = document.querySelector(':root');
var leftxt = document.querySelector(".ltxt")
var rightxt = document.querySelector(".rtxt")
var left = [leftxt,"--leftper"]
var right = [rightxt,"--rightper"]
cursize=5
var sides = {left:left,right:right}
function setper(num,side){
  r.style.setProperty(sides[side][1],num+"%");
  
  
}
function bob(){
setper(Math.floor(Math.random() * 101),"left")
setper(Math.floor(Math.random() * 101),"right")
}
setInterval(bob,500)