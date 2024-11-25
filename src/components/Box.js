
// 컴포넌트 매개변수 받는 방법1.
// props대신 중괄호{변수명}입력 => return값에 변수명만 입력
export default function Box( {text, detail} ) {

    // 매개변수 props
    // props = {text:'아침', detail : ~}
    // props = {text:'점심', detail : ~}
    // props = {text:'저녁', detail : ~};

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{text}</h1>
            <p>{detail}</p>
        </div>
    );
}


// 컴포넌트 매개변수 받는 방법 2.
// 매개변수(props)에 props입력 후 return에 props.text, props.detail로 입력

// export default function Box(props) {

//     // 매개변수 props
//     // props = {text:'아침', detail : ~}
//     // props = {text:'점심', detail : ~}
//     // props = {text:'저녁', detail : ~};

//     return (
//         <div style={{ backgroundColor: 'gray' }}>
//             <h1>{props.text}</h1>
//             <p>{props.detail}</p>
//         </div>
//     );
// }