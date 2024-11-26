import Box from "./Box";
import { useState } from "react";

export default function Props02() {
    // 배열이 state변수 처리가 되어야 재렌더링 일어나도 데이터가 유지된다.
    let [ txtArr, setTxtArr ] = useState([ '아침', '점심', '저녁', '야식' ]);
    let [ detailArr, setDetailArr ] = useState([ '배고프다', '졸리다', '피곤하다', '행복하다' ]);
    // let [num, setNum] = useState(0);

    let txt = document.getElementById('txtId');


    return (
        <div>
            {/* map함수 => 2개의 배열을 한번에 넘겨주는 방법... */}
            {txtArr.map((item, index) => {
                return <Box text={txtArr[ index ]} detail={detailArr[ index ]} />
                //return <Box text={item} detail={detailArr[index]} />
            })}

            <button onClick={() => {
                // 배열 하나 생성 [...arr] 사용 후 arr.push해서 값 입력!
                // let temp = [...txtArr];
                // temp.push('두번째 야식');
                // detailArr.push('살찐다');
                // setTxtArr(temp);
                // setDetailArr(detailArr);

                // setNum(num+1); // 기본타입 변수 (숫자형 변수)
                // 배열은 참조타입 변수이므로 재랜더링 안됨
                // 참조타입 변수 (배열) 수정시 state업데이트 할때 => 함수명(기존변수명 => [...기존변수명, '추가입력값']);
                setTxtArr(txtArr => [ ...txtArr, '야식2' ]);
                setDetailArr(detailArr => [ ...detailArr, '살찐다' ]);
            }}>추가버튼</button>

        </div>
    );
}