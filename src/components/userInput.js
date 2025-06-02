import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const UserInput = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const debounceValue = useDebounce(name, 2000);

  const handleNameChange = async (e) => {
    const value = e.target.value;
    setName(value);
  };

  const search = async (debounce_value) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${debounce_value}`
      );
      const data = await response?.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search(debounceValue);
  }, [debounceValue]);

  return (
    <div>
      USER NAME
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default UserInput;
