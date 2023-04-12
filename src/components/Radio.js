
import { RadioGroup, RadioOption } from "../Radio";
import { useState } from "react";

function Radio() {
  const [selected, setSelected] = useState("");
  console.log(selected)
  return (
    <div className="Radio">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default Radio;
