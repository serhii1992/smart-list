export default function RemoveElementList({ onRemoveClick, className }) {
  return (
    <>
      <span className={` removeElement ${className}`} onClick={onRemoveClick}>
        <div className="close"></div>
      </span>
    </>
  );
}
