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

  const upElement = (index, arr) => {
    //current element - up
    arr[index].order -= 1;
    //prev element - down
    arr[index - 1].order += 1;
    arr.sort((a, b) => {
      return a.order - b.order;
    });
    setList([...arr]);
  };

  const downElement = (index, arr) => {
    //current element - up
    arr[index].order += 1;
    //prev element - down
    arr[index + 1].order -= 1;
    arr.sort((a, b) => {
      return a.order - b.order;
    });
    setList([...arr]);
  };

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
                      upElement(index, arr);
                    }}
                    className="list__btn-up"
                  >
                    UP
                  </button>
                )}
                {index !== arr.length - 1 && (
                  <button
                    onClick={() => {
                      downElement(index, arr);
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
