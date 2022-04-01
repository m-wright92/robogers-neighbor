

*** Tests *** 

<!-- utility -->
Describe: range()

Test: "It should return an array of numbers from 0 to the the user's inputted number"
Code: range(5);
Expected output: [0, 1, 2, 3, 4, 5]

<!-- business -->
Describe: beep()

Test: "It wil recognize a 1"
Code: beep(1);
Expected output: True

Test: "It will recognize a 1 in a multi-digit number"
Code: beep(21);
Expected output: True 