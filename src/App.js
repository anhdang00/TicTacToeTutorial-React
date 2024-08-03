function Square(){
  return <button className="square">X</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
      </div>
    </>
  );
}
