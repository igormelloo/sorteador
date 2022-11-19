var sub = document.getElementById("enviar");
var sorte = document.getElementById("sorte");

sub.addEventListener("click", function(){

var min = document.getElementById("min").value;
var max = document.getElementById("max").value;

var num = Math.ceil( Math.random()*max);

while(num<min || num>max){
    var num = Math.ceil( Math.random());
}

sorte.innerHTML = num;

})
