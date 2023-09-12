import React, { useState } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [inputArr, setInputArr] = useState([]);

  const addItems = () => {
    if (!inputVal) {
      alert("please  give data");
    } else {
      setInputArr([...inputArr, inputVal]);
      setInputVal("");
    }
  };
  const DeleteItem = (id) => {
    const newArr = inputArr.filter((val, ind) => {
      return id !== ind;
    });
    setInputArr(newArr);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        TODO APP <br />
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button onClick={addItems}>Submit</button>
      </div>
      <div>
        <ul>
          {inputArr.map((val, ind) => {
            return (
              <li key={ind}>
                {val} <button onClick={() => DeleteItem(ind)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default App;
