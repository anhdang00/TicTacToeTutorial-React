function Square({value}){
  function HandleClick(){
    console.log("clicked!");
  }
  return <button className="square" onClick={HandleClick}>{value}</button>;
  
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
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
