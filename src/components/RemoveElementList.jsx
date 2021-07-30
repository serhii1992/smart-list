export default function RemoveElementList({ list, elemList, setList }) {
  const removeItemList = (elemList) => {
    console.log(list);
    let result = list.filter((e) => {
      return e.id !== elemList.id;
    });
    setList(result);
  };

  return (
    <>
      <span
        className="removeElement"
        onClick={() => {
          removeItemList(elemList);
        }}
      >
        <div className="close"></div>
      </span>
    </>
  );
}
