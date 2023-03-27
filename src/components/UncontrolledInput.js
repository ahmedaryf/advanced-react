import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleClick() {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
  }

  return (
    <div> 
        <h5>Uncontrolled Input</h5>
      <input type="text" ref={inputRef} />
      <button type="submit" onClick={handleClick}>Get Value</button>
    </div>
  );
}
export default UncontrolledInput;