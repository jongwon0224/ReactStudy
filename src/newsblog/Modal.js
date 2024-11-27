import './Modal.css';

export default function Modal(props) {

    return (

        <div className="modal" style={ {backgroundColor : props.bgColor} }>
            <h3>{props.title} ♥ {props.num}</h3>
            <p>날짜</p>
            <p>상세내용</p>
            {/* <button onClick={ () => {
                
                // let temp = [...props.news];
                // temp[0] = '긴급뉴스';
                // props.setNews(temp);
            }}>제목 수정</button> */}
        </div>

    )
}