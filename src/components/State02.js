
export default function State02 () {

    
    // let text = '';
   let textArr = []; //배열

    for(let i = 0; i < 5; i++) {
        // text += "<p>안녕하세요~</p>"
        textArr.push(<p>안녕하세요~</p>);
    }


    let numArr = [1,2,3,4,5];
    let msgArr = ['안녕', 'hi', 'hello', '헤이'];


    // 배열에서 map함수 사용 !!
    // => 변수명.map( (매개변수) => return {매개변수})
    let numAr = numArr.map( () => {
        return (<p>안녕하세요~</p>)
    })


    return (

        <div>
            {textArr}
            <hr/>
            {/* {numAr} */}
            {
                numArr.map( ( () => <p>안녕하세요~</p>) )
            }
            <hr/>
            {
                msgArr.map( (item) => {
                    return (<p>{item}0</p>)
                })
            }

        </div>
    );
}