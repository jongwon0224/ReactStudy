import { useState } from "react"
import './Quiz003.css';
import './Colorbox';
import ColorBox from "./Colorbox";

import { useEffect } from "react";


export default function Practice002() {

    // let [ box, boxCount ] = useState([]);
    // let [ box, setBox ] = useState([ 'red', 'blue', 'green', 'black' ]);
    let [ box, setBox ] = useState([]);



    function btnONOFF(event) {
        const clickedID = event.target.id;
        event.stopPropagation();
        let newBox = [ ...box ];

        if (clickedID === 'btn1') {
            newBox = [ 'red', ...box ];

        } else if (clickedID === 'btn2') {
            newBox = [ 'blue', ...box ];

        } else if (clickedID === 'btn3') {
            newBox = [ 'green', ...box ];

        } else if (clickedID === 'btn4') {
            newBox = [ ...box, 'red' ];

        } else if (clickedID === 'btn5') {
            newBox = [ ...box, 'blue' ];

        } else if (clickedID === 'btn6') {
            newBox = [ ...box, 'green' ];

        } else if (clickedID === 'btn7') {
            newBox.shift();

        } else if (clickedID === 'btn8') {
            newBox.pop();
        }

        setBox(newBox);
    }

    function delBox(index) {
        let newBoxes = [ ...box ];
        newBoxes.splice(index, 1);
        setBox(newBoxes);
    }

    let [ modalFlag, setModal ] = useState(false);

    

return (
    <div>
        <button id="btn1" onClick={(event) => { btnONOFF(event) }}>앞빨간박스추가</button>
        <button id="btn2" onClick={(event) => { btnONOFF(event) }}>앞파란박스추가</button>
        <button id="btn3" onClick={(event) => { btnONOFF(event) }}>앞초록박스추가</button>

        <button id="btn4" onClick={(event) => { btnONOFF(event) }}>뒤빨간박스추가</button>
        <button id="btn5" onClick={(event) => { btnONOFF(event) }}>뒤파란박스추가</button>
        <button id="btn6" onClick={(event) => { btnONOFF(event) }}>뒤초록박스추가</button>

        <button id="btn7" onClick={(event) => { btnONOFF(event) }}>앞 박스 삭제</button>
        <button id="btn8" onClick={(event) => { btnONOFF(event) }}>뒤 박스 삭제</button>
        <p></p>

       



        {
            modalFlag == true ? <div style={{ backgroundColor: 'green' }}>HIIIII</div> : null
        }


        {
            box.map((item, index) => {
                return <ColorBox bgcolor={item} delBox={() => delBox(index)} />

            })
        }


    </div>
)
}