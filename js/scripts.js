// utility


function range(input) {
  let numInput = parseInt(input);
  let numsOut = [];
  for (let i=0; i <= numInput; i++) {
    numsOut.push(i);
  }
  return numsOut;
}

// function beep(array) {
//   let beepArray = array.map(function(number) {
//     if (number.toString().includes(1)) {
//       return "Beep!";
//     }else {
//       return number;
//     }
//   });
//   return beepArray;
// }

// function boop(array) {
//   let boopArray = array.map(function(number) {
//     if (number.toString().includes(2)) {
//       return "Boop!";
//     }else {
//       return number;
//     }
//   });
//   return boopArray;
// }

function neighbor(array) {
  let output = array.map(function(number) {
    if (number.toString().includes(3)) {
      return "Won't you be my neighbor?";
    }else if (number.toString().includes(2)) {
      return "Boop!";
    }else if (number.toString().includes(1)) {
      return "Beep!";
    }else {
      return number
    }
  })
  return output;
}