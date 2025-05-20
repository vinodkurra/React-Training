// Arrow function 
1) simple Syntax
2) we can define function without function keyword


without parameters
const arrowFunction = () => {

}

one parameter

const arrowFunction = value => {

}

multiple 

const arrowFunction = (value, id, name) => {

}


// default parameters

const handleClick = (a = 1, b = 1) => {
    
    return a + b;
}


handleClick(2, 3)  //  5

handleClick(4) // 5 with defailt values // Nan without default values



// destructuring

//OBJECTS
const userData = {
    name: "Vinod", 
    age: "29",
    role : "developer"
}

// syntax const { key1, key2, ...} = Object;


console.log(userData.name, userData.age, userData.role);

  

const {name, age, role } = userData


console.log(name , age, role);

parent component => child component    

< Child name = { name }  id = { id }  data = { data }  age = { age } />
        
const Child = ({name, id, age}) => {
            
}

//ARRAYS

const [name, setName] = useState("");

const userArray = [1, 2, 3, 4, 5];


const [a, b] = userArray



const userArray = ["Vinod", 0, {name : "Apple", count :50}]

const [name = "", ,  user = {}   ] = userArray;
 

console.log(name, user);





REST and SPREAD 



const data = {name : "Apple", count :50 , state : "simla", days : 8};

const values = {...data};


values.name = "banana"

//  console.log(values, data)


 
const arr1 = [1, 2, 3];

const array2 = [...arr1, 4, 5, 6]

console.log(array2)



const array = [1, 2, 3, 4, 5, 6, 7, 8];

const [first,second,  ...rest] = array;


const user_Data = {
    user name: "Vinod", 
    "age": "29",
    "role" : "developer"
}


const { name, ...rest } = user_Data;


const isAvaialble = user_Data.hasOwnProperty("user");


// fetch || axios   

// API -> GET, POST, PUT, delete

//     request DATA

// Headers
    
// Response

// ReportingObserver.status 

// 5 to 10