import { useState } from "react";
import FormSubmit from "./FormSubmit";
import RemoveElementList from "./RemoveElementList";

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

  const showInputSubText = () => {
    setShowInput(true);
  };

  const removeItemSubList = (elemSub) => {
    elemList.subList = elemList.subList.filter((e) => {
      return e.id !== elemSub.id;
    });
    setList([...list]);
    if (elemList.subList.length < 1) {
      setShowInput(false);
    }
  };

  return (
    <>
      <ul className="sub-list">
        {elemList.subList.map((elem, index, arr) => {
          return (
            <li key={index}>
              <div className="list__text">{elem.subValue}</div>
              <RemoveElementList
                onRemoveClick={() => removeItemSubList(elem)}
                className="removeElement--sub"
              />
            </li>
          );
        })}
      </ul>
      {showInput && (
        <FormSubmit
          elemList={elemList}
          indexList={indexList}
          onSubmit={addItemSubList}
        />
      )}
      {!showInput && <button onClick={showInputSubText}>AddSublist</button>}
    </>
  );
}
