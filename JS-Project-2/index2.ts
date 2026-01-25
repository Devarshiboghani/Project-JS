// Program 1: multiplication table
let n: number = 5;    
let i: number = 1;      

while (i <= 10)        
{
    console.log(n + " x " + i + " = " + (n * i));
    i++;                
}


// Program 2: calculate the factorial
let num: number = 5;          
let fact: number = 1;
let i2: number = 1;

while (i2 <= num)
{
    fact = fact * i2;
    i2++;
}
console.log("Factorial of " + num + " is " + fact);


// Program 3: Armstrong number list
let limit: number = 500;      
let n1: number = 1;

do {
    let temp: number = n1;
    let sum: number = 0;

    do {
        let digit: number = temp % 10;
        sum = sum + (digit * digit * digit);
        temp = (temp - digit) / 10; 
    } while (temp > 0);

    if (sum === n1) {
        console.log(n1);
    }
    n1++;
} while (n1 <= limit);


// Program 4: Palindrome number list
let limit2: number = 200;   
let n2: number = 1;

while (n2 <= limit2) {
    let temp: number = n2;
    let rev: number = 0;

    while (temp > 0) {
        let d: number = temp % 10;      
        rev = (rev * 10) + d;
        temp = (temp - d) / 10;
    }

    if (rev === n2) {
        console.log(n2);
    }

    n2++;
}


// Program 5: Fibonacci Series
let count: number = 10;           // total terms
let a: number = 0;
let b: number = 1;    
let i5: number = 1;

while (i5 <= count) {
    console.log(a);

    let next: number = a + b;
    a = b;
    b = next;

    i5++;
}


// Program 6: Add all the integers between 0 and 30 
let i6: number = 0;
let sum6: number = 0;

do {
    sum6 = sum6 + i6;
    i6++;
} while (i6 <= 30);

console.log("Total sum =", sum6);


// Program 7: 
let i7: number = 1;

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
let output: string = "";

for(let i8: number = 1; i8 <= 10; i8++) {
    output = output + i8;
    if (i8 !== 10) {
        output = output + "-";   // Add hyphen if it's not the last number
    }
}
console.log(output);


// Program 9: displays 1+4+9+16+...+100 = 385
let sum9: number = 0;
let output2: string = "";

for (let i9 = 1; i9 <= 10; i9++) {
    let square: number = i9 * i9;
    sum9 = sum9 + square;
    output2 = output2 + square;
    
    if (i6 !== 10) {
        output2 = output2 + "+";   // Add "+" if it's not the last number
    }
}

output2 = output2 + " = " + sum9;    // Add the total sum at the end

console.log(output2);


// Program 10: display below pattern using nested for loop
let s: number = 5;     

for (let p: number = 1; p <= s; p++) {

    let row: string = "";

    for (let q: number = s; q > s - p; q--) {
        row = row + q +"\t";
    }
    console.log(row);
}


// Program 11: display below pattern using nested for loop
let rows: number = 5;     
let val: number = 1;     

for (let l: number = 1; l <= 5; l++) {

    let ro: string = "";

    for (let m: number = 1; m <= l; m++) {
        ro = ro + val + "\t";
        val++;
    }
    console.log(ro);
}