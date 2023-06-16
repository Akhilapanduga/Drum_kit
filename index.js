
//Detect button press 
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
 document.querySelectorAll("button")[i].addEventListener("click",function(){
   var btncr=this.innerHTML;
   makesound(btncr);
   btnanimation(btncr);

  }); 
}
//detect keyboard
document.addEventListener("keydown",function(event){
   makesound(event.key);
   btnanimation(event.key);
})

function makesound(btncr){
    switch(btncr){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
              audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();  
            break;
        case "k":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();  
            break;
        case "l":
             var audio=new Audio('sounds/snare.mp3');
             audio.play();
             break;
        default: console.log(btncr);
       }
}

function btnanimation(btn){
    var cls=document.querySelector("."+btn);
    cls.classList.add("pressed");
    setTimeout(function(){
       cls.classList.remove("pressed");},100);
}