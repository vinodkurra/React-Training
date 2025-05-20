let name = "vinod";
// console.log(name => syntax error ")"  is missing;

const list = null || undefined;

// console.log(list.length) = "TypeError: Cannot read properties of null (reading 'length')

const value = 68;

const upperCase = value.toUpperCase();

// console.log(upperCase)  :  "TypeError: name.toUpperCase is not a function

// console.log(myVariable) : "ReferenceError: myVariable is not defined

// try {
//   100 lines of code which has possibilities of errors

// }
// catch (error){
//     this can catch any error from that 100 lines wrotten in try block and can handle errors in a different with out breaking actual UI

// }

// EX 1:

// import "./styles.css";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     try {
//       const list = null;
//       if (list.length > 0) {
//         setData(list);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// ERROR HANDLING COMPONENT catch

// return (

//     <div>
//         We are running through
//     </div>
// )

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
    fetchDataByID();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const convertData = await data.json();
      if (convertData?.length > 0) {
        setData(convertData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataByID = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      const convertData = null;

      if (convertData.length > 0) {
        setData(convertData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // modalClose();
      // setLoader(false)
      // setuserData(null)
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
