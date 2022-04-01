

*** Tests *** 

<!-- utility -->
Describe: range()

Test: "It should return an array of numbers from 0 to the the user's inputted number"
Code: range(5);
Expected output: [0, 1, 2, 3, 4, 5]

<!-- business -->
Describe: one()

Test: "It wil recognize a 1"
Code: one(1);
Expected output: True

Test: "It will recognize a 1 in a multi-digit number"
Code: one(21);
Expected output: True 

Describe: two()

Test: "It will recognize a 2 in a multi-digit number"
Code: two(762);
Expected output: True

Describe: three()

Test: "It will recognize a 3 in a multi-digit number"
Code: three(8037)
Expected output: True

Describe: neighbor()

Test: "It will display array from 0 to input number"
Code: neighbor(3);
Expected output: 0, 1, 2, 3

Test: "It will replace 3 with 'Won't you be my neighbor?'"