Web Storage ?

    localStorage  

    space // 10 mb
    never expire
    accessible only from client side 

1) localStorage.setItem(key, value);
2) localStorage.getItem(key);
3) localStorage.removeItem(key);
4) localStorage.clear();


import { useMemo, useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {}, []);

  localStorage.setItem("userRole", "Admin");
  localStorage.setItem("userName", "Jhon");
  localStorage.removeItem("userRole");
  localStorage.clear();
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");

  console.log(userRole, userName, localStorage.length);

  return (
    <div className="App">
      <h1>Hello {userRole}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


Session storage 

 space // 5 mb
    expires when tab / browser closed
    accessible only from client side 

1) sessionStorage.setItem(key, value);
2) sessionStorage.getItem(key);
3) sessionStorage.removeItem(key);
4) sessionStorage.clear();



import { useMemo, useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {}, []);

  sessionStorage.setItem("userRole", "Admin");
  sessionStorage.setItem("userName", "Jhon");
  // sessionStorage.removeItem("userRole");
  // sessionStorage.clear();
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");

  console.log(userRole, userName, sessionStorage.length);

  return (
    <div className="App">
      <h1>Hello {userRole}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


cookies

space // 4kb
it has some expiry Date

it can accessible from both client and server side.


const date = new Date();
    document.cookie = "name=" + "Vinod";
document.cookie = "expires=" + date.toUTCString() + ";"
    
document.write("set Cookie : " + "name=" + "Vinod")



universal - cookie
 
import cookies from "universal-cookie";


const cookies = new cookies();


1) cookies.set("authToken", token, { path: "/", maxAge: 862000 });
// username + password
// token  -> set token cookies
// login API with token
// will hit al next apis using the same token from cookies
// if token in cookies will allow user to protected routes.


2) cookies.set("rememberMe", true, { path: "/", maxAge: 862000 });
// user selected remember me check box
// login API -> success response -> username || email will save to cookies
// when user visit this page next time we can prefill username || email input


3) cookies.set("theme", "dark", { path: "/", maxAge: 862000 });
// user can select his theme and we can save it to cookies


4) cookies.set("Cart", "[1, 2]", { path: "/", maxAge: 862000 });
// user can add his products cart with out sign in 

