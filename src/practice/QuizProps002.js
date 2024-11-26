import './Quiz002.css';


export default function QuizProps002( {title, num, detail, detail_num}) {

    return (

        <div className="App">
            <div className='textItem'>
                <p className='title'>{title} : {num}</p>
                <p>{detail} : {detail_num}</p>
            </div>
        </div>
    )

}