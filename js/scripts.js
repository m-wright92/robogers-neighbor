// utility
function range(input) {
  let numArray = [];
  for (let i=0; i <= input; i++) {
    numArray.push(i);
  }
  return numArray;
}


// business
function one(input) {
  if (input.toString().indexOf('1') > -1){
      return true
  }else {
      return false
  }
}

function two(input) {
  if (input.toString().indexOf('2') > -1){
      return true
  }else {
      return false
  }
}

function three(input) {
  if (input.toString().indexOf('3') > -1){
      return true
  }else {
      return false
  }
}