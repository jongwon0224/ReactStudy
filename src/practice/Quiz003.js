import { useState } from 'react';
import './Quiz003.css';

export default function Quiz003() {

    let [ box, boxCount ] = useState([]);
    let [ arr, setArr ] = useState([ 1, 1 ]);


    function add_box() {
        box.push(<div className='box'>박스</div>);
        boxCount(box => [ ...box]);
    }


    return (
        <div>
            <p>
                <button onClick={() => { add_box()}}>추가</button>
            </p>

            { box }


            {/* <p>
                <button onClick={() => { add_box()
                    let temp = [ box ];
                    temp.push(<div className='box'>박스</div>);
                    boxCount(temp);
                }}>추가</button>
            </p>

            {
                box
            } */}



            {/* <p>
                <button onClick={() => {
                    // let temp = [...arr];
                    // temp.push(1);
                    // setArr(temp);

                    arr.push(1);
                    setArr(arr => [ ...arr ]);
                }}>추가</button>
            </p>

            {
                arr.map(() => {
                    return <div className='box'>박스</div>;
                })
            } */}

        </div>
    )
}