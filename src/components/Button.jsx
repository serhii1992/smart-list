export default function Button(props) {
  return (
    <>
      <button className="form-submit__btn">{props.children}</button>
    </>
  );
}
