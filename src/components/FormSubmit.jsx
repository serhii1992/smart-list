import Button from "./Button";
import { useState } from "react";

export default function FormSubmit({ addItemList }) {
  const [textImput, setTextImput] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    addItemList(textImput);
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
