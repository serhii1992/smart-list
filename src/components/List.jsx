import FormSubmit from "./FormSubmit";
import OderBtn from "./OderBtn";
import ListContent from "./ListContent";
import { useState } from "react";

export default function List() {
  const [list, setList] = useState([
    {
      value: null,
      id: null,
      order: null,
      subList: [
        {
          suBvalue: null
        }
      ]
    }
  ]);

  const addItemList = (value) => {
    value &&
      setList([
        ...list,
        {
          value,
          id: list.length + 1,
          order: list.length + 1,
          subList: [
            {
              suBvalue: null
            }
          ]
        }
      ]);
  };

  const addItemSubList = (suBvalue, elem, index) => {
    console.log(elem.subList);
    list[index].subList = [...elem.subList, { suBvalue }];
    setList([...list]);
  };

  return (
    <>
      <ul className="list">
        {list.map((elem, index, arr) => {
          return (
            <li key={elem.id}>
              <OderBtn index={index} arr={arr} setList={setList} />
              <ListContent
                index={index}
                list={list}
                elem={elem}
                setList={setList}
              />
              <FormSubmit
                index={index}
                elem={elem}
                addItemSubList={addItemSubList}
              />
              {!list.subList && <button>AddSublist</button>}
            </li>
          );
        })}
      </ul>
      <FormSubmit list={list} setList={setList} addItemList={addItemList} />
    </>
  );
}
