import { memo } from "react";
import PropTypes from "prop-types";

const Child = ({
  name = "Hello world",
  age,
  info,
  hobbies = [],
  isLoggedIn,
}) => {
  console.log("hghgh", hobbies, name);
  return (
    <>
      <h2 key="Child-h2-name">{name}</h2>
      <div>{age}</div>
      <div>{info?.firstName}</div>
      <div>
        {hobbies &&
          hobbies.length > 0 &&
          hobbies.map((item, index) => (
            <div key={`Child-hobbies-${index}`}>{item}</div>
          ))}
      </div>
      <div>{isLoggedIn || (name && <div>Hello {name} welcome</div>)}</div>
    </>
  );
};

Child.propTypes = {
  name: PropTypes.string.isRequired, // Must be a string and required
  age: PropTypes.number.isRequired, // Must be a number and required
  info: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
  hobbies: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default memo(Child);
