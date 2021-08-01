import SubList from "./SubList";
import RemoveElementList from "./RemoveElementList";

export default function ListContent({ list, setList, elemList, indexList }) {
  const removeItemList = () => {
    let result = list.filter((e) => {
      return e.id !== elemList.id;
    });
    setList(result);
  };

  return (
    <div className="list__content">
      <div className="list__text">{elemList.value}</div>
      <SubList
        list={list}
        setList={setList}
        elemList={elemList}
        indexList={indexList}
      />
      <RemoveElementList onRemoveClick={removeItemList} />
    </div>
  );
}
