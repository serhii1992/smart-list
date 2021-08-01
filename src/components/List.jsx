import FormSubmit from "./FormSubmit";
import OrderBtn from "./OrderBtn";
import ListContent from "./ListContent";
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
          order: list.length + 1,
          subList: []
        }
      ]);
  };

  return (
    <>
      <ul className="list">
        {list.map((elem, index, arr) => {
          return (
            <li key={elem.id}>
              <OrderBtn index={index} arr={arr} setList={setList} />
              <ListContent
                indexList={index}
                list={list}
                elemList={elem}
                setList={setList}
              />
              {/* {!list.subList && <button>AddSublist</button>} */}
            </li>
          );
        })}
      </ul>
      <FormSubmit list={list} setList={setList} onSubmit={addItemList} />
    </>
  );
}
