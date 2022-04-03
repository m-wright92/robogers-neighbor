// utility


function range(input) {
  let numInput = parseInt(input);
  let numsOut = [];
  for (let i=0; i <= numInput; i++) {
    numsOut.push(i);
  }
  return numsOut;
}

// business

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

// ui

$(document).ready(function() {
  
  $("#user-sub").submit(function(event) {
    event.preventDefault();
    let inputNum = $("#fav-num").val();
    let finalArray;
    let finOutput;

    if (inputNum === "0") {
      $("#results").toggleClass("hidden");
      $("#results").text("<li>" + "I guess you don't want to play :(" + "</li>");
    } else {
      finalArray = range(inputNum);
      finOutput = neighbor(inputNum);
    }
    $("#result").text("<li>" + finOutput)
  })
})