import Button from "./Button";
import { useState } from "react";

export default function FormSubmit({
  addItemList,
  addItemSubList,
  elemList,
  indexList
}) {
  const [textImput, setTextImput] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (addItemList) {
      addItemList(textImput);
    }
    if (addItemSubList) {
      addItemSubList(textImput, elemList, indexList);
    }
    setTextImput("");
  };

  return (
    <>
      <form onSubmit={handelSubmit} className="form-submit">
        <input
          type="text"
          placeholder="Enter a note"
          value={textImput}
          onChange={(e) => setTextImput(e.target.value)}
          className="form-submit__input"
        />
        <Button>ADD</Button>
      </form>
    </>
  );
}
