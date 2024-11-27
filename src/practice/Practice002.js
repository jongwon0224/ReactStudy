import { useState } from "react"
import './Quiz003.css';
import './Colorbox';
import ColorBox from "./Colorbox";

export default function Practice002() {

    let [ box, boxCount ] = useState([]);

    function btnONOFF(event) {
        const clickedID = event.target.id;
        event.stopPropagation();
        let newBox = [...box];
        
        if (clickedID === 'btn1') {
            newBox.unshift(<ColorBox color={'red'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn2') {
            
            newBox.unshift(<ColorBox color={'blue'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn3') {
            newBox.unshift(<ColorBox color={'green'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn4') {
            newBox.push(<ColorBox color={'red'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn5') {
            newBox.push(<ColorBox color={'blue'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn6') {
            newBox.push(<ColorBox color={'green'} />);
            boxCount(newBox);

        } else if (clickedID === 'btn7') {
            newBox.shift();
            boxCount(newBox);

        } else if (clickedID === 'btn8') {
            newBox.pop();
            boxCount(newBox);
        }
    }

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

            {box}

        </div>
    )
}