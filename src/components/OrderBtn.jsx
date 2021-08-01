export default function OrderBtn({ index, arr, setList }) {
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
  );
}
