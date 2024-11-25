import { useState } from "react";


export default function Practice001() {

    let txtArr = [ '하나', '둘', '셋', '넷' ];

    let [ count, setCount ] = useState(0);

    function changeTxt() {
        setCount(count + 1);
    }

    if (count == 4) {
        count = 0;
    }

    return (
        <div>
            <p>{txtArr[ count ]}</p>
            <button style={ {fontSize : 20, fontWeight : "bold"} } onClick={() => changeTxt()}
            >변경버튼</button>
        </div>
    );
}