# robogers-neighbor

#### By Mike Wright

#### An example of arrays and looping!

## Technologies Used

* HTML
* CSS
* JavaScript
 
 ## Description

 This site demonstrates the power of arrays and looping to modify data. I also used an array map to help with injecting updated values into the final result from user input!

 ## Setup Instructions

 * Clone repository from https://github.com/m-wright92/robogers-neighbor
 * Navigate to the top level of the portfolio directory
 * Open index.html in your web browser (it has only been tested in Google Chrome)

 ## Known Bugs
 None at time of publishing.

 

 ## License

 MIT

 Copyright (c) 04-01-2022 Mike Wright

*** Tests *** 

<!-- utility -->
Describe: range()

Test: "It should return an array of numbers from 0 to the the user's inputted number"
Code: range(5);
Expected output: [0, 1, 2, 3, 4, 5]

<!-- business -->
Describe: neighbor()

Test: "It will recognize a 1 and replace with 'Beep!'"
let num = [51]
code: neighbor(num);
Expected output: "Beep!"

Test: "It will recognize a 2 and replace with 'Boop!'"
let num = [42]
Code: neighbor(num);
Expected output: "Boop!"

Test: "It will recognize 3 and replace with 'Won't you be my neighbor?"
let num = [123]
Code: neighbor(num);
Expected output: "Won't you be my neighbor?"