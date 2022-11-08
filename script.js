// Create and initialize variables
var dollars = 0;

var addDollars = 5;
function hello(x){
  

// When the button is clicked, increase
// the value of dollars by 5. Update the
// text on the screen.

  dollars = dollars + addDollars;
  document.getElementById("dollars").innerHTML = dollars;
};
function Buy1(x){
 
  if (dollars >= 100){
    x.disabled = true
   
   
  dollars = dollars - 100;
    document.getElementById("dollars").innerHTML = dollars;
   addDollars = addDollars +15
  }
  else{ dollars = dollars};
  document.getElementById("dollars").innerHTML = dollars;};


  function Hatch(x){
   
   if (dollars >= 100){
   
   
  dollars = dollars - 100;
   document.getElementById("Output").innerHTML = getRndInteger(0,10);
     document.getElementById("dollars").innerHTML = dollars;
  }
  else{ dollars = dollars};
  document.getElementById("dollars").innerHTML = dollars;};


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}