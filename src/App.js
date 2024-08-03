import { useState } from "react";

function Square(){
  const [value, setValue] = useState(null);
  return <button className="square" onClick={HandleClick}>{value}</button>;
  function HandleClick(){
    setValue('x');
  }
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}
