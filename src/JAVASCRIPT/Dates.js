const date = new Date(); //  current date and time;

new Date("2023-01-01"); //  date string.
new Date(year, month, day, hours, minutes, seconds, ms); // year and month.

new Date(ms);

const date = new Date(2021, 7, 12, 8, 40, 50, 35);

// const date = new Date();

// get methods

const year = date.getFullYear();
const month = date.getMonth();
const date_ = date.getDate();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();

// set methods
const setYear = date.setFullYear(2022); // set year to 2022
const setMonth = date.setMonth(5); // set month to June (0-11)
const setDate = date.setDate(15); // set date to 15th
const setDay = date.setDay(3); // set day to Wednesday (0-6)
const setHours = date.setHours(10); // set hours to 10 AM
const setMinutes = date.setMinutes(30); // set minutes to 30
const setSeconds = date.setSeconds(45); // set seconds to 45
const setMilliseconds = date.setMilliseconds(500); // set milliseconds to 500

console.log(
  "Today date : ",
  date,
  "Full Year",
  year,
  month,
  date_,
  day,
  hours,
  minutes
);


import "./styles.css";
import moment from "moment";

export default function App() {
  const updatedDate = moment("2025, 07, 23").format("MMM Do YY");
  console.log(updatedDate);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}



Third party libraries:
// 1. moment.js
// 2. date-fns
