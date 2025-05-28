import { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [name, setName] = useState("vinod kumar");

  return (
    <div>
      Here I am learning prop-types
      <Child
        name={name}
        age={null}
        info={{ firstName: "Vinod", lastName: "Kumar", age: 28 }}
        hobbies={[1, 3, 4, 5, 6]}
        isLoggedIn={false}
      />
    </div>
  );
};

export default Parent;
