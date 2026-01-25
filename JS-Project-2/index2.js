// Program 1: multiplication table
var num1 = 5;
var i1 = 1;
while (i1 <= 10) {
    console.log(num1 + " x " + i1 + " = " + (num1 * i1));
    i1++;
}
// Program 2: calculate the factorial
var num2 = 5;
var fact = 1;
var i2 = 1;
while (i2 <= num2) {
    fact = fact * i2;
    i2++;
}
console.log("Factorial of " + num2 + " is " + fact);
// Program 3: Armstrong number list
var limit = 500;
var num3 = 1;
do {
    var temp = num3;
    var sum = 0;
    do {
        var digit = temp % 10;
        sum = sum + (digit * digit * digit);
        temp = (temp - digit) / 10;
    } while (temp > 0);
    if (sum === num3) {
        console.log(num3);
    }
    num3++;
} while (num3 <= limit);
// Program 4: Palindrome number list
var limit1 = 200;
var num4 = 1;
while (num4 <= limit1) {
    var temp = num4;
    var rev = 0;
    while (temp > 0) {
        var d = temp % 10;
        rev = (rev * 10) + d;
        temp = (temp - d) / 10;
    }
    if (rev === num4) {
        console.log(num4);
    }
    num4++;
}
// Program 5: Fibonacci Series
var n3 = 10; // total terms
var a = 0;
var b = 1;
var i3 = 1;
while (i3 <= n3) {
    console.log(a);
    var next = a + b;
    a = b;
    b = next;
    i3++;
}
// Program 6: Add all the integers between 0 and 30 
var i4 = 0;
var sum1 = 0;
do {
    sum1 = sum1 + i4;
    i4++;
} while (i4 <= 30);
console.log("Total sum =", sum1);
// Program 7: 
var i5 = 1;
do {
    if (i5 % 3 === 0 && i5 % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i5 % 3 === 0) {
        console.log("Fizz");
    }
    else if (i5 % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i5);
    }
    i5++;
} while (i5 <= 100);
// Program 8: displays 1-2-3-4-5-6-7-8-9-10
var output1 = "";
for (var i5_1 = 1; i5_1 <= 10; i5_1++) {
    output1 = output1 + i5_1;
    if (i5_1 !== 10) {
        output1 = output1 + "-"; // Add hyphen if it's not the last number
    }
}
console.log(output1);
// Program 9: displays 1+4+9+16+...+100 = 385
var sum2 = 0;
var output2 = "";
for (var i6 = 1; i6 <= 10; i6++) {
    var square = i6 * i6;
    sum2 = sum2 + square;
    output2 = output2 + square;
    if (i6 !== 10) {
        output2 = output2 + "+"; // Add "+" if it's not the last number
    }
}
output2 = output2 + " = " + sum2; // Add the total sum at the end
console.log(output2);
// Program 10: display below pattern using nested for loop
var n4 = 5;
for (var i7 = 1; i7 <= n4; i7++) {
    var row = "";
    for (var j1 = n4; j1 > n4 - i7; j1--) {
        row = row + j1 + "\t";
    }
    console.log(row);
}
// Program 11: display below pattern using nested for loop
var rows = 5;
var num5 = 1;
for (var i8 = 1; i8 <= 5; i8++) {
    var ro = "";
    for (var j2 = 1; j2 <= i8; j2++) {
        ro = ro + num5 + "\t";
        num5++;
    }
    console.log(ro);
}
