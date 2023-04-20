
let numberClick = document.querySelectorAll(".drum").length;  // define veriable till it's length

for ( let i = 0; i< numberClick; i++){  /// 0 1 2 3 4 5 6 wil be store 
 document.querySelectorAll(".drum")[i].addEventListener("click", function (){ 
   console.log(this.style.color = "white");
 });
};


let audio = new Audio ("sounds/tom-1.mp3");
   audio.play ();


   var newhousekeeper

