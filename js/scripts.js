// utility


function range(input) {
  let numInput = parseInt(input);
  let numsOut = [];
  for (let i=0; i <= numInput; i++) {
    numsOut.push(i);
  }
  return numsOut;
}

function one(input) {
  if (input.toString().indexOf('1') > -1){
      return true
  }else {
      return false
  }
}

function beep(array) {
  let beepArray = array.map(function(number) {
    if (number.toString().includes(1)) {
      return "Beep!";
    }else {
      return number;
    }
  });
  return beepArray;
}
