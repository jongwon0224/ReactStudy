
function Basic01() {

    //변수 부분
    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";
    let flag = false;


    let hi = '';
    for (let i = 0; i < 5; i++) {
        hi += '안녕~';
    }

    // flag : true => hello변수 출력
    // flag : false => hello2변수 출력

    // if문 3가지 => 1. &&연산자 // 2. 3항연산자 // 3. if문 사용

    // 함수 부분
    return (
        <div className="App">
            <h1>리액트</h1>

            {/* css직접 태그에 적용시 className입력 */}
            <h2 className="font-red">hello</h2> {/*문자 그대로 인식*/}

            { // && 연산자 (true일때)
                flag && <h2>{hello}</h2>
            }
            { // &&연산자 (false일때)
                !flag && <h2 className="font-red">{hello2}</h2>
            }
            {
                // if문 사용 => 3항 연산자로 대체
                // flag ? <h2>{hello}</h2> : <h2>{hello2}</h2> 
            }

            <h3>{hello}</h3> {/*변수로 인식*/}

            {/* 태그에 직접 style지정시 중괄호 2번 */}
            <h4 style={{ color: 'blue' }}>{hi}</h4>
        </div>
    );

    // if 사용시

    // if (flag) {
    //   return (
    //     <div className="App">
    //       <h1>리액트</h1>
    //       <h2>hello</h2> {/*문자 그대로 인식*/}
    //       <h2>{hello}</h2> {/*변수로 인식*/}
    //       <h2>{hi}</h2>
    //     </div>
    //   );
    // } else {
    //   <div className="App">
    //     <h1>리액트</h1>
    //     <h2>hello</h2> {/*문자 그대로 인식*/}
    //     <h2>{hello}</h2> {/*변수로 인식*/}
    //     <h2>{hi}</h2>
    //   </div>
    // }

}

export default Basic01;