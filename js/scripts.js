// utility
let numArray = [];

function range(input) {
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

function neighbor(input) {
  let neighArray = range(input);
  let outputArray = [];
  neighArray.forEach(function(number) {
  	outputArray.push
  });
}

// function neighbor(input) {
//   let neighArray = range(input);
//   // let midArray = [];
//   let outputArray = "";
//   for (i=0; i < neighArray.length; i++) {
//     let midArray = neighArray.toString();
//     if (three(neighArray) === true) {
//       outputArray.push(neighArray)
//       outputArray.replace("3", "sucess");
//     }
//     return outputArray;
//   }
// }

// ui
// $(document).ready(function() {
  // let numArray = [];
  
  // function range(input) {
  //   for (let i=0; i <= input; i++) {
  //     numArray.push(i);
  //   }
  //   return numArray;
  // };

  // function neighbor(input) {
  //   let outputArray = []
  //   for (i=0; i < input; i++) {
  //     if (three === true) {
  //       range(input);
  //       outputArray.push(numArray);
  //     }
  //     return outputArray;
  //   }
  // }
  // neighbor(range());

// })