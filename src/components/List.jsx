import FormSubmit from "./FormSubmit";
import { useState } from "react";

export default function List() {
  const [list, setList] = useState([]);

  const addItemList = (value) => {
    setList([...list, { value }]);
  };

  const removeItemList = (elem) => {
    let result = list.filter((e) => {
      return e.value !== elem.value;
    });
    setList(result);
  };

  return (
    <>
      <ul className="list">
        {list.map((elem, index) => {
          return (
            <li key={index}>
              {elem.value}
              <span
                className="removeElement"
                onClick={(index) => {
                  removeItemList(elem);
                }}
              >
                <div className="close"></div>
              </span>
            </li>
          );
        })}
      </ul>
      <FormSubmit addItemList={addItemList} />
    </>
  );
}
