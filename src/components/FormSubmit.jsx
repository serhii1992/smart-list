import Button from "./Button";
import { useState } from "react";

export default function FormSubmit({ onSubmit, elemList, indexList }) {
  const [textInput, setTextInput] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(textInput, elemList, indexList);
    setTextInput("");
  };

  return (
    <>
      <form onSubmit={handelSubmit} className="form-submit">
        <input
          type="text"
          placeholder="Enter a note"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="form-submit__input"
        />
        <Button>ADD</Button>
      </form>
    </>
  );
}
