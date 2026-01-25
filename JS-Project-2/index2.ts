// Program 1: multiplication table
let num1: number = 5;    
let i1: number = 1;      

while (i1 <= 10)        
{
    console.log(num1 + " x " + i1 + " = " + (num1 * i1));
    i1++;                
}


// Program 2: calculate the factorial
let num2: number = 5;          
let fact: number = 1;
let i2: number = 1;

while (i2 <= num2)
{
    fact = fact * i2;
    i2++;
}
console.log("Factorial of " + num2 + " is " + fact);


// Program 3: Armstrong number list
let limit: number = 500;       // given limit
let num3: number = 1;

do {
    let temp: number = num3;
    let sum: number = 0;

    do {
        let digit: number = temp % 10;
        sum = sum + (digit * digit * digit);
        temp = (temp - digit) / 10; 
    } while (temp > 0);

    if (sum === num3) {
        console.log(num3);
    }
    num3++;
} while (num3 <= limit);


// Program 4: Palindrome number list
let n2: number = 200;   // given limit
let num4: number = 1;

while (num4 <= n2) {
    let temp: number = num4;
    let rev: number = 0;

    while (temp > 0) {
        let d: number = temp % 10;      
        rev = (rev * 10) + d;
        temp = (temp - d) / 10;
    }

    if (rev === num4) {
        console.log(num4);
    }

    num4++;
}


// Program 5: Fibonacci Series
let n3: number = 10;           // total terms
let a: number = 0;
let b: number = 1;    
let i3: number = 1;

while (i3 <= n3) {
    console.log(a);

    let next: number = a + b;
    a = b;
    b = next;

    i3++;
}


// Program 6: Add all the integers between 0 and 30 
let i4: number = 0;
let sum1: number = 0;

do {
    sum1 = sum1 + i4;
    i4++;
} while (i4 <= 30);

console.log("Total sum =", sum1);


// Program 7: 
let i5: number = 1;

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
let output1: string = "";

for(let i5: number = 1; i5 <= 10; i5++) {
    output1 = output1 + i5;
    if (i5 !== 10) {
        output1 = output1 + "-";   // Add hyphen if it's not the last number
    }
}

console.log(output1);


// Program 9: displays 1+4+9+16+...+100 = 385
let sum2: number = 0;
let output2: string = "";

for (let i6 = 1; i6 <= 10; i6++) {
    let square: number = i6 * i6;
    sum2 = sum2 + square;
    output2 = output2 + square;
    
    if (i6 !== 10) {
        output2 = output2 + "+";   // Add "+" if it's not the last number
    }
}

output2 = output2 + " = " + sum2;    // Add the total sum at the end

console.log(output2);


// Program 10: display below pattern using nested for loop
let n4: number = 5;      //Maximum number

for (let i7: number = 1; i7 <= n4; i7++) {

    let row: string = "";

    for (let j1: number = n4; j1 > n4 - i7; j1--) {
        row = row + j1 +"\t";
    }
    console.log(row);
}


// Program 11: display below pattern using nested for loop
let rows: number = 5;     // Total rows
let num5: number = 1;     // Start number

for (let i8: number = 1; i8 <= 5; i8++) {

    let ro: string = "";

    for (let j2: number = 1; j2 <= i8; j2++) {
        ro = ro + num5 + "\t";
        num5++;
    }
    console.log(ro);
}