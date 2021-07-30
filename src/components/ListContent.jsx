import SubList from "./SubList";

export default function ListContent({ list, setList, elemList, indexList }) {
  const removeItemList = (elemList) => {
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
      <span
        className="removeElement"
        onClick={(index) => {
          removeItemList(elemList);
        }}
      >
        <div className="close"></div>
      </span>
    </div>
  );
}
