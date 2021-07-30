import { useState } from "react";
import FormSubmit from "./FormSubmit";

export default function SubList({ elemList, indexList, setList, list }) {
  const [showInput, setShowInput] = useState(false);

  const addItemSubList = (subValue, elem, index) => {
    if (subValue) {
      elem.subList = [
        ...elem.subList,
        { subValue, id: elem.subList.length + 1 }
      ];
      setList([...list]);
    }
  };

  const removeItemSubList = (elemList, elem) => {
    console.log(elemList, elem);
    elemList.subList = elemList.subList.filter((e) => {
      return e.id !== elem.id;
    });
    setList([...list]);
    if (elemList.subList.length < 1) {
      setShowInput(false);
    }
  };

  const showInputSubText = (showInput) => {
    setShowInput(true);
  };

  return (
    <>
      <ul className="sub-list">
        {elemList.subList.map((elem, index, arr) => {
          return (
            <li key={index}>
              <div className="list__text">{elem.subValue}</div>
              <span
                className="removeElement removeElement--sub"
                onClick={() => {
                  removeItemSubList(elemList, elem);
                }}
              >
                <div className="close"></div>
              </span>
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
