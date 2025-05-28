import useWindowWidth from "../hooks/useWindowWidth";

const CustomHooks = () => {
  const width = useWindowWidth();

  console.log("width", width);

  return (
    <div>
      This is custom hooks page
      <div>Width of the window </div>
    </div>
  );
};

export default CustomHooks;
