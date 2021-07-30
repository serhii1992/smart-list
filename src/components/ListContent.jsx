export default function ListContent({ list, setList, elem, index }) {
  const removeItemList = (elem) => {
    let result = list.filter((e) => {
      return e.id !== elem.id;
    });
    setList(result);
  };

  return (
    <div className="list__content">
      <div className="list__text">{elem.value}</div>
      {false && (
        <ul className="">
          {elem.subList.map((elem, index, arr) => {
            return (
              <li key={elem.id}>
                <div className="list__text">{elem.suBvalue}</div>
              </li>
            );
          })}
        </ul>
      )}
      <span
        className="removeElement"
        onClick={(index) => {
          removeItemList(elem);
        }}
      >
        <div className="close"></div>
      </span>
    </div>
  );
}
