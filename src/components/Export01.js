import menu1 from "../data/Mydata01";
import menu2 from "../data/Mydata01";
import { menu4, menu5, menu6 } from "../data/Mydata02";

function Export01() {

//    import { menu4, menu5, menu6 } from "../data/Mydata02";
//    객체 단위로 가져오면 내가 직접 추가 할수있음..ex) {menu4}만 가능

// export && import 중요함 => export는 변수1개만 보내기 가능

    
    return (
        <div>
            <h1>Export1</h1>
            <h2>{menu1}</h2>
            <h2>{menu2}</h2> {/*김밥출력됨*/}
            <h2>{menu4}</h2>
            <h2>{menu5}</h2>
            <h2>{menu6}</h2>
        </div>
    )
}

export default Export01;