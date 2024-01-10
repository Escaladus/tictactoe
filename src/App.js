import "./App.css";
import { useState } from "react";
const initialValue = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};
function App() {
  const [state, setState] = useState(false);
  const [value, setValue] = useState(initialValue);

  const RenderNode = () => {
    const nods = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const handleClick = (num) => {
      if (value[num] === "") {
        setValue((prev) => ({ ...prev, [num]: state ? "X" : "O" }));
        setState(!state);
      } else {
        alert("Next please!");
      }
    };

    return nods.map((nod) => {
      return (
        <div key={nod}>
          <button onClick={() => handleClick(nod)}>{value[nod]}</button>
        </div>
      );
    });
  }; // RenderNode

  const Reset = () => {
    return (
      <div>
        <button onClick={() => setValue(initialValue)}>Reset</button>
      </div>
    );
  }; // Reset

  return (
    <div className="App">
      <RenderNode />
      <Reset />
    </div>
  );
} // App

export default App;
