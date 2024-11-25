import { useState } from "react";


function State01() {
    
    // Reat Hooks
    // useState => 상태를 저장하는 변수
    // state 변수값이 변경 된 경우 => 재렌더링
    // set함수를 통해서 변경된 경우 => 재렌더링됨
    
    let cnt = 0;
    
    //const[변수명, set함수명] = useState(초기값)
    let[count, setCount] = useState(0);
    
    // 위에 useState구조
    // function setCount(num) {
    //     count = num;
    // }

    function plusNum () {
        setCount (count + 1); 
    }

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{count}</p>
            {/* <button onClick={function () {
                cnt++;
                console.log('클릭됨');
                console.log(cnt);
            }}>cnt증가</button> */}
            <button onClick={ () => plusNum()}>count증가</button>

            <p>{count}</p>
            <button onClick={ () => {
                // count++; // set함수 사용아닌경우 값은 증가하지만 재랜더링x
                //setCount(1);
                //setCount( count++ );
                plusNum()}
                // setCount(count => count+2);
                }>count증가(state)</button>
        </div>
    );
}

export default State01;