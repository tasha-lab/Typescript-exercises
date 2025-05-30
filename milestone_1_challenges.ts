//1. Return the Sum of Two Numbers
function addition( a:number, b:number): void{
      console.log(a +b);
}

addition(4,5)

//2. Convert Minutes into Seconds
function convert (min:number):void{
      let convertedMinutes = min * 60;
      console.log(convertedMinutes)
}
convert(3)

//3. Perimeter of a Rectangle
function perimeterRectangle(length:number, width:number):void{
      let perimeter = (length+width)*2;
      console.log(perimeter)
}
perimeterRectangle(4,5)

//4. Check Negative
function isNegative(num:number):void{
      if(num<0){
            console.log("true")
      }else {
            console.log("false")
      }
}
isNegative(3)
isNegative(4)
isNegative(-3)

//5. Can I Drive
function canDrive(name:string, age:number):void{
      if(age>=18){
            console.log(`${name} is old enough to drive`)
      }else{
            console.log(`${name} is not old enough to drive yet `)
      }
}
canDrive("tasha", 20)
canDrive("tasha", 15)

//6. Largest Number
function findLargest(a:number, b:number, c:number){
      if(a>b && a >c){
            console.log(a)
      }else if(b>a && b>c){
            console.log(b)
      }else{
            console.log(c)
      }
}
findLargest(3,4,5)
findLargest(2,-4,-5)