// utility
function range(input) {
  let numArray = [];
  for (let i=0; i <= input; i++) {
    numArray.push(i);
  }
  return numArray;
}


// business
function beep(input) {
  if (input.toString().indexOf('1') > -1){
      return true
  }else {
      return false
  }
}

function boop(input) {
  if (input.toString().indexOf('2') > -1){
      return true
  }else {
      return false
  }
}