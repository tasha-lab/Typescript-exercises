// //1. Return the Sum of Two Numbers
// function addition( a:number, b:number): void{
//       console.log(a +b);
// }
// addition(4,5)
//2. Convert Minutes into Seconds
function convert(min) {
    var convertedMinutes = min * 60;
    console.log(convertedMinutes);
}
convert(3);
//3. Perimeter of a Rectangle
function perimeterRectangle(length, width) {
    var perimeter = (length + width) * 2;
    console.log(perimeter);
}
perimeterRectangle(4, 5);
//4. Check Negative
function isNegative(num) {
    if (num < 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
isNegative(3);
isNegative(4);
isNegative(-3);
//5. Can I Drive
function canDrive(name, age) {
    if (age >= 18) {
        console.log("".concat(name, " is old enough to drive"));
    }
    else {
        console.log("".concat(name, " is not old enough to drive yet "));
    }
}
canDrive("tasha", 20);
canDrive("tasha", 15);
//6. Largest Number
function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
findLargest(3, 4, 5);
findLargest(2, -4, -5);
findLargest(-3, 444, 50);
//7. BMI Calculator
function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log("Underweight");
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normal Weight");
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Overweight");
    }
    else {
        console.log("Obese");
    }
}
calculateBMI(57, 5.2);
calculateBMI(85, 1.8);
//8. Greeting Based On Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        console.log("Good morning, ".concat(name, "!"));
    }
    else if (hour >= 12 && hour <= 17) {
        console.log("Goodafternoon ".concat(name, "!"));
    }
    else if (hour >= 18 && hour <= 21) {
        console.log(" Goodevening, ".concat(name, "!"));
    }
    else {
        console.log("Goodnight, ".concat(name, "!"));
    }
}
greetUser("Tasha", 5);
greetUser("Tasha", 23);
//9. FizzBuzz
function fizzBuzzCheck(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
}
fizzBuzzCheck(15);
fizzBuzzCheck(10);
fizzBuzzCheck(9);
//10. Perimeter 2
function secondPerimeter(l, num) {
    if (l = "s") {
        console.log(4 * num);
    }
    else if (l = "c") {
        console.log(2 * 6.28 * num);
    }
}
secondPerimeter("c", 10);
secondPerimeter("s", 4);
//11. Sum of Even Numbers
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 2; i <= n; i += 2) {
        sum += i;
    }
    console.log(sum);
}
sumEvenNumbers(10);
sumEvenNumbers(20);
//12. Multiply by Itself
function powerUp(num, times) {
    var answer = 1;
    for (var i = 1; i <= times; i++) {
        answer = answer * num;
    }
    console.log(answer);
}
powerUp(3, 4);
powerUp(2, 5);
//13. Factorial Calculator
function factorial(n) {
    var answer = 1;
    for (var i = 1; i <= n; i++) {
        answer = answer * i;
    }
    console.log(answer);
}
factorial(5);
factorial(4);
//14. Multiple Sum
function sumMultiples(n, divisor) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumMultiples(10, 2));
console.log(sumMultiples(15, 3));
//15. Sum of Digits
function sumDigits(num) {
    var sum = 0;
    for (var i = 1; num > 0; num = Math.floor(num / 10)) {
        sum = sum + (num % 10);
    }
    return sum;
}
console.log(sumDigits(234));
