// 1. Print message Good Morning
function greet(message) {
    if(message === undefined) {
        console.log("Good Morning");
    } 
}
greet();     
// Output : Good Morning


// 2. Circle area
function circleArea(radius) {
    let pi = 3.14;
    return pi * radius * radius;
}
let result = circleArea(7);
console.log("Area of Circle =", result);
// Output : Area of Circle = 153.86


// 3. Triangle area
function triangleArea(length, height) {
    return (length * height) / 2;
}
let area = triangleArea(10, 5);
console.log("Area of Triangle =", area);
// Output : Area of Triangle = 25


// 4. Rectangle area
function rectangleArea(length, height) {
    return length * height;
}
let area1 = rectangleArea(8, 6);
console.log("Area of Rectangle =", area1);
// Output : Area of Rectangle = 48


// 5. ans of ((b*b)(4*a*c)/(2*a))
function calculate(a, b, c) {
    return (b * b * 4 * a * c) / (2 * a);
}
let ans = calculate(5, 3, 2); 
console.log("Ans of ((b*b)(4*a*c))/(2*a) =", ans);  
// Output : Ans of ((b*b)(4*a*c))/(2*a) = 36
 

// 6. ans of (a*a) + (2*a*b) + (b*b)
function calculate1(a, b) {
    return (a * a) + (2 * a * b) + (b * b);
}
let ans1 = calculate1(3, 4);
console.log("Ans of (a*a)+(2*a*b)+(b*b) =", ans1);
// Output : Ans of (a*a)+(2*a*b)+(b*b) = 49


// 7. Convert Fahrenheit to Celsiue
function fahrenheitToCelcius(f) {
    return (f - 32) / 1.8;
}
let celsius = fahrenheitToCelcius(95);
console.log("Temperature in Celsius =", celsius);
// Output : Temperature in Celsius = 35

// 8. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 1.8) + 32;
}
let fahrenheit = celsiusToFahrenheit(35);
console.log("Temperature in Fahrenheit =", fahrenheit);
// Output : Temperature in Fahrenheit = 95


// 9. odd or even number
function checkOddEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even number");
    } else {
        console.log(num + " is Odd number");
    }
}
checkOddEven(10);
// Output : 10 is Even number


// 10. swap a value without third variable
function swap(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
       a = a + b;
       b = a - b;
       a = a - b;
    console.log("After Swap: a =", a, ", b =", b);
}
swap(10, 20);
// Output : Before Swap: a = 10 , b = 20
//        : After Swap: a = 20 , b = 10
