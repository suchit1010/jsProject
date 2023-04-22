
let numberClick = document.querySelectorAll(".drum").length;  // define veriable till it's length

for ( let i = 0; i< numberClick; i++){  /// 0 1 2 3 4 5 6 wil be store 
 document.querySelectorAll(".drum")[i].addEventListener("click", function (){  /// we add function when we click by mouse to produce sound.

  let buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);

 });
};



// when we keyboard press make sound so add event listener keydown for info chekout in mdn eventlistener 
document.addEventListener("keydown", function (event){

  makeSound(event.key);

});



function makeSound (key){


  switch (key) {
    case "w":
      let crash = new Audio("sounds/crash.mp3");
      crash.play ();
      
      break;
  
      case "a":
        let kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play ();
        
        break;
  
        case "s":
          let snare = new Audio("sounds/snare.mp3");
          snare.play ();
          
          break;
  
          case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play ();
            
            break;
  
            case "j":
              let tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play ();
              
              break;
  
              case "k":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play ();
                
                break;
  
                case "l":
                  let tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play ();
                  
                  break;
  
    default: console.log(buttonInnerHTML);
    
  }
  
}



