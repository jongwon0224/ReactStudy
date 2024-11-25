import './Quiz001.css';
import { useState } from "react";

function Quiz001() {

  let [ count, setCount ] = useState(0);
  
  return (
    <div>
      <button onClick={function () {
        setCount(count + 2);
      }}>짝수출력</button>
      <span style={ {color : 'red' }}>{count}</span>
    </div>
  );
}
export default Quiz001;