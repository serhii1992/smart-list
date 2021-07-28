import FormSubmit from "./FormSubmit";
import { useState } from "react";

export default function List() {
  const [list, setList] = useState([]);

  const addItemList = (value) => {
    value &&
      setList([
        ...list,
        {
          value,
          id: list.length + 1,
          order: list.length + 1
        }
      ]);
  };

  const removeItemList = (elem) => {
    let result = list.filter((e) => {
      return e.id !== elem.id;
    });
    setList(result);
  };

  const upElement = (elem, index, arr) => {
    arr.splice(index, 1);
    arr.splice(index - 1, 0, elem);
    setList([...arr]);
  };

  const downElement = (elem, index, arr) => {
    arr.splice(index, 1);
    arr.splice(index + 1, 0, elem);
    setList([...arr]);
  };

  console.log(list);
  return (
    <>
      <ul className="list">
        {list.map((elem, index, arr) => {
          return (
            <li key={index}>
              <div className="list__oder">
                {index !== 0 && (
                  <button
                    onClick={() => {
                      upElement(elem, index, arr);
                    }}
                    className="list__btn-up"
                  >
                    UP
                  </button>
                )}
                {index !== arr.length - 1 && (
                  <button
                    onClick={() => {
                      downElement(elem, index, arr);
                    }}
                    className="list__btn-down"
                  >
                    DOWN
                  </button>
                )}
              </div>
              <div className="list__content">
                <div className="list__text">{elem.value}</div>
                <span
                  className="removeElement"
                  onClick={(index) => {
                    removeItemList(elem);
                  }}
                >
                  <div className="close"></div>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <FormSubmit addItemList={addItemList} />
    </>
  );
}
