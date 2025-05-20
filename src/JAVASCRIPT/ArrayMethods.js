const names = ["vinod", 1, { name: "Sam", age: 28 }, [1, 2, 3, 4]];

// const arrayName = [item1, ietm2, ... ]  //

const names2 = ["apple", "orange", "grape", "one", "two", "three"];

const names_1 = new Array("one", "two", "three");

// names.length = 2

// console.log( names, names_1);

// const length = names.length;

// console.log(length)

// const first = names[0];

// const last = names[names.length-1]

// names[2] = "five"

// console.log( names,first , last);

// const arrayToString =  names.toString()

// const stringToArray =  arrayToString.split(",")

// console.log( names, arrayToString, stringToArray);

// const data = {name  : "vinod"};
// const data1 = [1, 2, 3,]

// console.log(Array.isArray(data1));

string; // 10%
numbers; // 5%
arrays; // 65%
objects; // 20%

const names34 = ["apple", "orange", "grape", "mango"];
const cars = ["benz", "ferrari", "honda"];
const numbers = [1, 2, 3, 4, 5];

const string = names.join("/");

// names.pop()
// names.shift()

// names.unshift("lemon")
// names.push("show more")

// const newValue = names.concat(cars, numbers);

// const newValue = names.concat("new value");

//   names.copyWithin(2, 0, 2)

// const newArrays = [names, cars, numbers];

// const newArrayData = newArrays.flat()

//  names.splice(2, 2, "Lemon", "Kiwi" )

// 1 position where new elements should be added // 2

// how many elements to be removed from that position // 1

// rest parameters define the new elements to be added  "one", "two"

names.splice(1, 2);

console.log(names);

const namesToRender = [vinod, am, venu, prasanth];




// const value = names[2];

// const index = names.indexOf("banana", 2);   // array.indexOf(item, start);
// const index2 = names.lastIndexOf("banana");   // array.lastIndexOf(item, start);

// const userValue = ""

// handleAddNew = () => {
// debugger
// if(!userValue) return;
//     const isExist = names.includes(userValue);
//     if (isExist) {
//         alert("already there");
//     return;
//     }else{
//   names.push('green apple')
//     }
// console.log("out of my if else")
// navigate("/user/list")
// }
// handleAddNew()

// add new +

// vinod  *

// sam   *

// venu   *

// prasanth   *

// const ages = [27, 12, 27, 13, 18, 23, ]

// const myFindFunction = (value, index)=>{
//     return value > 23

// }

// // const valueFound = ages.find(myFindFunction);
// // const valueFound = ages.findIndex(myFindFunction);
// const valueFound = ages.findLast(myFindFunction);
// const valueFound = ages.findLastIndex(myFindFunction);

// console.log(valueFound)

// const names = ["carrot",  "banana",  "lemon",  "apple",];

// ARRAYS - SORT []

// apple

// banana

// carrot

// lemon


const names = ["carrot", "banana", "dog", "apple"];

// const sorted = names.sort();  // A-Z
names.sort();
console.log("sort", names);
names.reverse();

console.log("reverse", names);


const names = ["carrot", "banana", "dog", "apple"];

const sorted = names.toSorted();

console.log(names, sorted);


const names = ["carrot", "banana", "dog", "apple"];

const sorted = names.toReversed();

console.log(names, sorted);



const names = [1, 2, 25, 16, 37, 55, 9, 7, 100]; // strings

const sorted = names.sort();

console.log(sorted);




const names = [1, 2, 25, 16, 37, 55, 9, 7, 100]; // strings

 

const sorted = names.sort((a, b) => {
  return b - a;
});

console.log(sorted);


 
 
const data = [
  { name: "apple", count: 10 },
  { name: "banana", count: 65 },
];

const sorted = data.sort((a, b) => {
  return b.count - a.count;
});

console.log(sorted);


 

ARRAY ITERATION METHODS



while : first condition true : code block execute 

// while(...condition){
//     //code block
// }

//  let i =0;

// while(i <= 5){
 
//   console.log("count", i);
// i++;
// }



 
  
do while : for first time it will execute code block before checking condition.
  
  
  
  // do{

//   //code block
// }while(...condition) 

   let i =6;

 do {
  console.log("count", i)
i++
}while(i <= 4)

  
for
  
  
  for(let i=0; i < 3; i++  ){

console.log("count", i)

}




// for(initialization; condition; increment/decrement){
//     code block
// }


1) initialization

2) condition : true   : i = 0

3) code block execute

4) increment  i++ = 1



2) condition : true   : i = 1

3) code block execute

4) increment i++ = 2


forEach // 2%
map // 70%
filter // 20%



 




