
function handleClick(x = 0, y = 0) { // function declaration
    return x + y    
}

function handleAddStudentMarks(tel, eng, sci, soc, math, hin = 0) { // function declaration
    return tel + eng + sci + soc + math + hin    //  Nan
}



// student marks addition  6 

const vinodTotalMarks = handleAddStudentMarks(50, 60, 70, 80, 90,); // example usage

const vishalTotalMarks = handleAddStudentMarks(50, null, 70, 80, 90, 100); // example usage

const handleClick = (x, y) => { // arrow function
    return x + y
} 


(function handleClick(x, y) { // IIFE - Immediately Invoked Function Expression
    return x + y             // self invoking function or anonymous function
})();

const value1 = handleClick(2, 3) // 5
const value2 = handleClick(70, 80) // 150


user defined //

declaration & expression

const myFun = function (a, b) { return a * b };  // function expression


myFun(2, 3); // calling the function with arguments 2 and 3





function showMessage(message){
  alert(message)
}


showMessage("I am vinod");


// CALL & APPLY  &7 BIND

const data = {
    fullName : function (city, state) {
        return  city + state + this.lastName + this.firstName+ " " ;
    }
};

const userData = {
  firstName : "Vishal",
lastName : "Kumar"
}

   

const callFullName = data.fullName.call(userData, "hyd", "TG" ); // call method is used to call a function with a given this value and arguments provided individually.
const applyFullName = data.fullName.apply(userData, ["hyd", "TG"] );  // apply method is used to call a function with a given this value and arguments provided as an array.
const bindFullName = data.fullName.bind(userData, ); // bind method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
console.log(fullName)
 
