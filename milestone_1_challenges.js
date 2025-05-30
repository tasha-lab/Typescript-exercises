//1. Return the Sum of Two Numbers
function addition(a, b) {
    console.log(a + b);
}
addition(4, 5);
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
