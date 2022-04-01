

*** Tests *** 

<!-- utility -->
Describe: range()

Test: "It should return an array of numbers from 0 to the the user's inputted number"
Code: range(5);
Expected output: [0, 1, 2, 3, 4, 5]

<!-- business -->
Describe: beep()

Test: "It will recognize a 1 in a multi-digit number"
let num = [21]
Code: beep(num);
Expected output: True 

Describe: boop()

Test: "It will recognize a 2 in a multi-digit number"
let num = [762]
Code: boop(num);
Expected output: True

Describe: neighbor()

Test: "It will recognize a 1 and replace with 'Beep!'"
let num = [212]
code: neighbor(num);
Expected output: "Beep!"

Test: "It will recognize a 2 and replace with 'Boop!'"
let num = [32]
Code: neighbor(num);
Expected output: "Boop!"

Test: "It will recognize 3 and replace with 'Won't you be my neighbor?"
let num = [938]
Code: neighbor(num);
Expected output: "Won't you be my neighbor?"