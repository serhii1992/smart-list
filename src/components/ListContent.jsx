import SubList from "./SubList";
import RemoveElementList from "./RemoveElementList";

export default function ListContent({ list, setList, elemList, indexList }) {
  return (
    <div className="list__content">
      <div className="list__text">{elemList.value}</div>
      <SubList
        list={list}
        setList={setList}
        elemList={elemList}
        indexList={indexList}
      />
      <RemoveElementList setList={setList} list={list} elemList={elemList} />
    </div>
  );
}
