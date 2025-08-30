
const display=document.getElementById('display')
const saymbol=document.getElementById("saymbol")


function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value='';
}
function clearDisplay1(){
let currentValue =display.value;
//slice
display.value=currentValue.slice(0,-1);
}
//yahan par ina a,b calculote karna hai
function calculator(){
  try{
    display.value = eval(display.value);
  }
  catch (error) {
    display.value=''
  }
}

