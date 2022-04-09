console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*  First try
const numbers = [2, 22, 12, 17, 18, 39, 129];
arraySum.forEach(function sum(vaule) {
    if (i = 0, i <= arraySum.length, i++) {
        console.log(vaule+0)
    }
}) */

  //Second with research
//If set up this way it's const, function
/*
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {    
let sum = 0;

numbers.forEach((numbers) => {    
    sum += numbers;
});
 return sum;      
}
console.log(arraySum(numbers)) 
*/

//Exercise Walkthrough Documentation
/*
const numbers = [2, 22, 12, 17, 18, 39, 129];
const arraySum = (numbers) => {
  let sum = 0;
  number.forEach((numbers) => {
     sum += numbers;
  });
  return sum;
};
 console.log(arraySum(numbers));
*/
 //Exercise Walkthrough Vidio
//reduce method - return any mathemathical equation - reduces the numbers in 
//your array to a single vaule. reduces the items in your array to a single value.

//Function Declaration
/*
const numbers = [2, 22, 12, 17, 18, 39, 129];
    function arraySum(numbers) {
        sum = 0;
    numbers.forEach(function (value) {
        sum += value;
    });
          return sum;
}
      console.log(arraySum(numbers))
*/
/*
What forEach is doing:
function callbk(value, index, array) {  
    console.log(value, index, array);
}
for(let value of numbers){
    callbk(value, numbers[value], numbers);
}

console.log(arrayNum(numbers))  */

//
//for (let value of numbers) {
//callbk(value, numbers(value, numbers);
//

// Will look like the following
//If we set it up with => it has to be with const, const
/*
const numbers = [1, 2, 3, 4];
const arrayNum = (numbers) => {
    sum = 0;
  numbers.forEach((numbers) => {
    sum += numbers;
});
return sum;
};
console.log(arrayNum(numbers));  */

//this method with reduce would be the same - reduce to single value
//with only 4 lines of code instead of 8
/*
const numbers = [1, 2, 3, 4];

let withReduce = numbers.reduce((sum, value) => {
    return sum + value;
});

console.log(withReduce);
*/
//you can "reduce" do with string type as well

const numbers = ["1", "2", "3", "4"]
let withReduce = numbers.reduce((sum, value) => {
    return sum + value;
});

console.log(withReduce)

//output "1234" cancatnate them
// Exercise 2 Section

/*
console.log("EXERCISE 2:\n==========\n");
//First Try
const book = {
    title: "Fallen", 
    author: "Lauren Kate",
    pages: "452",
    readcount: "1",
    bookInfo: function () {
        return this.title 
        + " " + "by" + " " 
        + this.author + "," 
        + " " + this.pages + " " 
        + "pages" + "," + " " 
        + "read" + " " + this.readcount 
        + " "+ "time.";

    },
};
    
      console.log(book.bookInfo());
*/






//()air function "function => {" , but can not use "this" 
//to bind function with this, must use function (){
//the function declaration allow the use of "this" which now 
//allow you to put in many books 
const book = {
    title: "Fallen",
    author: "Lauren Kate",
    pages:  452,
    readcount: "1",
    info: function () {  
  return  `${this.title}, ${this.author}, ${this.pages} pages, read ${this.readcount} time.`;
},
//pagesRead: function () {
   //console.log(this.pages + this.readcount);
//},
};

//const user = {
  //  bookList: [book]
//}

console.log(book.info());
//book.pagesRead();
//can add more then one method
//will see "toString: function () {" this will show what's in the object
//console.log(book.toString());





