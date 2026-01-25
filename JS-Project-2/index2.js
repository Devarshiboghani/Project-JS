// Program 1: multiplication table
var n = 5;
var i = 1;
while (i <= 10) {
    console.log(n + " x " + i + " = " + (n * i));
    i++;
}
// Program 2: calculate the factorial
var num = 5;
var fact = 1;
var i2 = 1;
while (i2 <= num) {
    fact = fact * i2;
    i2++;
}
console.log("Factorial of " + num + " is " + fact);
// Program 3: Armstrong number list
var limit = 500;
var n1 = 1;
do {
    var temp = n1;
    var sum = 0;
    do {
        var digit = temp % 10;
        sum = sum + (digit * digit * digit);
        temp = (temp - digit) / 10;
    } while (temp > 0);
    if (sum === n1) {
        console.log(n1);
    }
    n1++;
} while (n1 <= limit);
// Program 4: Palindrome number list
var limit2 = 200;
var n2 = 1;
while (n2 <= limit2) {
    var temp = n2;
    var rev = 0;
    while (temp > 0) {
        var d = temp % 10;
        rev = (rev * 10) + d;
        temp = (temp - d) / 10;
    }
    if (rev === n2) {
        console.log(n2);
    }
    n2++;
}
// Program 5: Fibonacci Series
var count = 10; // total terms
var a = 0;
var b = 1;
var i5 = 1;
while (i5 <= count) {
    console.log(a);
    var next = a + b;
    a = b;
    b = next;
    i5++;
}
// Program 6: Add all the integers between 0 and 30 
var i6 = 0;
var sum6 = 0;
do {
    sum6 = sum6 + i6;
    i6++;
} while (i6 <= 30);
console.log("Total sum =", sum6);
// Program 7: 
var i7 = 1;
do {
    if (i7 % 3 === 0 && i7 % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i7 % 3 === 0) {
        console.log("Fizz");
    }
    else if (i7 % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i7);
    }
    i7++;
} while (i7 <= 100);
// Program 8: displays 1-2-3-4-5-6-7-8-9-10
var output = "";
for (var i8 = 1; i8 <= 10; i8++) {
    output = output + i8;
    if (i8 !== 10) {
        output = output + "-"; // Add hyphen if it's not the last number
    }
}
console.log(output);
// Program 9: displays 1+4+9+16+...+100 = 385
var sum9 = 0;
var output2 = "";
for (var i9 = 1; i9 <= 10; i9++) {
    var square = i9 * i9;
    sum9 = sum9 + square;
    output2 = output2 + square;
    if (i6 !== 10) {
        output2 = output2 + "+"; // Add "+" if it's not the last number
    }
}
output2 = output2 + " = " + sum9; // Add the total sum at the end
console.log(output2);
// Program 10: display below pattern using nested for loop
var s = 5;
for (var p = 1; p <= s; p++) {
    var row = "";
    for (var q = s; q > s - p; q--) {
        row = row + q + "\t";
    }
    console.log(row);
}
// Program 11: display below pattern using nested for loop
var rows = 5;
var val = 1;
for (var l = 1; l <= 5; l++) {
    var ro = "";
    for (var m = 1; m <= l; m++) {
        ro = ro + val + "\t";
        val++;
    }
    console.log(ro);
}
