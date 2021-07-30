import { useState } from "react";
import FormSubmit from "./FormSubmit";

export default function SubList({ elemList, indexList, setList, list }) {
  const [showInput, setShowInput] = useState(false);

  const addItemSubList = (subValue, elem, index) => {
    console.log(elem);
    elem.subList = [...elem.subList, { subValue }];
    setList([...list]);
  };

  const showInputSubText = (showInput) => {
    setShowInput(true);
  };

  return (
    <>
      <ul className="sub-list">
        {elemList.subList.map((elem, index, arr) => {
          return (
            <li key={elem.id}>
              <div className="list__text">{elem.subValue}</div>
            </li>
          );
        })}
      </ul>
      {showInput && (
        <FormSubmit
          elemList={elemList}
          indexList={indexList}
          addItemSubList={addItemSubList}
        />
      )}
      {!showInput && <button onClick={showInputSubText}>AddSublist</button>}
    </>
  );
}
