var katzDeliLine = []; 
var number = 0;

function takeANumber(katzDeliLine) {
  number++;
  katzDeliLine.push(number);
  
  return `You should be listening for ${number}.`;
}



function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) return "There is nobody waiting to be served!";
  
  return `Currently serving ${katzDeliLine.shift()}.`;
}


function currentLine(katzDeliLine) {
 
  if (!katzDeliLine.length) return "The line is currently empty."; //bang
  
  var newArray = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
      newArray.push(katzDeliLine[i]);
  }
  
  return `The line is currently: ${newArray.join(", ")}`; 
}







