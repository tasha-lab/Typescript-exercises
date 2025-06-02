//1. Sum of Positives
function sumOfPositives(num:number[]):void{
    let sum =0;
       for(let i= 0;i <num.length;i++){
           if(num[i]>0){
               sum = sum + num[i];
           }
       }
       console.log(sum)
   }
   sumOfPositives([-3,-5,4,2])

   //2. Find Maximum Value
   function findMax(num:number[]):void{
    let max= num[0]

    for (let i = 0; i<num.length;i++){
        if(num[i]>max){
            max=num[i]
        }
    }
    console.log(max)
   }
   findMax([1,3,4,7,8])
   findMax([1,3,4,7,-8])
   
   //3. Election winner
   interface Candidate {
    name:string;
    votes:number
   }

   function findWinner(candidates :Candidate[]):void{
    let winner = candidates[0]

    for(let i = 1; i<candidates.length;i++){
        if(candidates[i].votes>winner.votes){
            winner = candidates[i];
        }
    }

    console.log(winner)
   }
   const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
  ];

   findWinner(candidates)

   //4. Longest word
   function findLongestWord(arr:string[]):void{
    let LongestWord =arr[0]

    for(let i = 0;i<arr.length;i++){
        if(arr[i].length>LongestWord.length){
            LongestWord=arr[i]
        }
    }
    console.log(LongestWord)
   }

   findLongestWord([ "grapefruit","apple", "banana", "pear"])

   //5. Count Properties
   interface Person{
    name:string;
    age:number;
    city:string
   }

   function countProperties(properties:Person):void{
    let keys = Object.keys(properties)
    console.log(keys.length)
   }
   countProperties({ name: "Alice", age: 25, city: "Paris" })

//6. Filter by Length

function filterByLength(words:string[],minLength:number):void{
    let result =words.filter((words)=>words.length>=minLength)
    console.log(result)
}
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)

//7. Sum of Even Numbers
function sumEvenNumbers(array:number[]):void{
    let sum = 0;

    for(let i = 0;i<array.length;i++){
        if(array[i]%2===0){
            sum=sum+array[i]
        }
    }
    console.log(sum)
}
sumEvenNumbers([1, 2, 3, 4, 5, 6])

//8. Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(array:number[]):void{
    let sumOdd =0
    let sumEven =0

    for(let i= 0;i<array.length;i++){
        if(array[i]%2===0){
            sumEven = sumEven + array[i]
        }else {
            sumOdd = sumOdd +array[i]
        }
    }
    let difference = sumEven - sumOdd
    console.log(difference)
}
differenceEvenOdd([1, 2, 3, 4, 5, 6])

interface MyObject {
    [key: string]: number | null | undefined | boolean | string;
  }
  
  function countTruthy(myObject: MyObject): void {
    let count = 0;
    const properties = Object.keys(myObject);
  
    for (let i = 0; i < properties.length; i++) {
      const key = properties[i];
      const value = myObject[key];
  
      if (value) {
        count++;
      }
    }
  
    console.log(count);
  }
  
  console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
  
  //10. Average of Numbers

  function average(array:number[]):void{
    let average:number = 0
    if(array.length===0){
        console.log(0)
        return;
    }
    let sum = 0
    for(let i =0;i<array.length;i++){
        sum = sum + array[i]
        average = sum / (array.length)
    }
    console.log(average)
  }
  average([2, 4, 6, 8])
  average([])

  //11. Linear Search

  function linearSearch (array:number[], value:number): void{
    // let currentValue =[0]
    for(let i=0; i<array.length;i++){
        if(array[i]===value){
            console.log (i)
            return
        }
       
    }

    console.log(-1)
  }
  linearSearch([2,4,5,6],5)
  linearSearch([2,4,5,6],4)

  //12. Reverse Linear Search

  function reverseLinearSearch(array:number[], value:number):void{
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i]===value){
            console.log (i)
            return
        }
    }
    console.log(-1)
  }
  reverseLinearSearch([2,4,5,6],5)
  reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)
  reverseLinearSearch([1, 2, 3, 4, 5], 10)

  //13. Linear Search All Indices
  function linearSearchAll(array:number[], value:number):void{
    let match =[]
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            match.push(i);
        }
  }
  console.log(match)
}
linearSearchAll([2,4,5,6],5)
linearSearchAll([5, 3, 7, 1, 4, 7], 7)
linearSearchAll([1, 2, 3, 4, 5], 10)

//14. Count Occurrences
let myObject:{ [key:string]:number} ={}
function countOccurrences(words:string[]): void {
    myObject = {}
    for (let i = 0; i < words.length; i++) {
        let item = words[i];
        if (myObject[item]) {
          myObject[item]= myObject[item] + 1
        } else {
          myObject[item] = 1
        }
      }
      console.log(myObject)
}

countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);
countOccurrences(["ten", "five", "apple", "one", "ten", "one"]);

//15. Remove Duplicates
function removeDuplicates(array: number[]): void {
    let newArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
    console.log(newArray);
  }
  
  removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
removeDuplicates([1, 6, 6, 7, 6, 6, 3, 4, 2, 1]);
  
//16. Most Frequent
const mostFrequent = (arr: unknown[]) => {
    const count: { [key: string]: number } = {};
    let max = 0;
    let result: unknown = undefined;
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const key = String(item);
      if (count[key]) {
        count[key]++;
      } else {
        count[key] = 1;
      }
  
      if (count[key] > max) {
        max = count[key];
        result = item;
      }
    }
  console.log(result);
    return result;
  };
  mostFrequent(["hello","hello","me",1,1]);
      
  
  