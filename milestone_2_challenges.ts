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