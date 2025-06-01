//1. Sum of Positives
function sumOfPositives(num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            sum = sum + num[i];
        }
    }
    console.log(sum);
}
sumOfPositives([-3, -5, 4, 2]);
//2. Find Maximum Value
function findMax(num) {
    var max = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    console.log(max);
}
findMax([1, 3, 4, 7, 8]);
findMax([1, 3, 4, 7, -8]);
function findWinner(candidates) {
    var winner = candidates[0];
    for (var i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    console.log(winner);
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
findWinner(candidates);
//4. Longest word
function findLongestWord(arr) {
    var LongestWord = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > LongestWord.length) {
            LongestWord = arr[i];
        }
    }
    console.log(LongestWord);
}
findLongestWord(["grapefruit", "apple", "banana", "pear"]);
function countProperties(properties) {
    var keys = Object.keys(properties);
    console.log(keys.length);
}
countProperties({ name: "Alice", age: 25, city: "Paris" });
//6. Filter by Length
function filterByLength(words, minLength) {
    var result = words.filter(function (words) { return words.length >= minLength; });
    console.log(result);
}
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);
//7. Sum of Even Numbers
function sumEvenNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum = sum + array[i];
        }
    }
    console.log(sum);
}
sumEvenNumbers([1, 2, 3, 4, 5, 6]);
//8. Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array) {
    var sumOdd = 0;
    var sumEven = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumEven = sumEven + array[i];
        }
        else {
            sumOdd = sumOdd + array[i];
        }
    }
    var difference = sumEven - sumOdd;
    console.log(difference);
}
differenceEvenOdd([1, 2, 3, 4, 5, 6]);
function countTruthy(myObject) {
    var count = 0;
    var properties = Object.keys(myObject);
    for (var i = 0; i < properties.length; i++) {
        var key = properties[i];
        var value = myObject[key];
        if (value) {
            count++;
        }
    }
    console.log(count);
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
//10. Average of Numbers
function average(array) {
    var average = 0;
    if (array.length === 0) {
        console.log(0);
        return;
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
        average = sum / (array.length);
    }
    console.log(average);
}
average([2, 4, 6, 8]);
average([]);
