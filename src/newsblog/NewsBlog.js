import { useState } from 'react';
import './NewBlog.css';
import Modal from './Modal';

export default function NewsBlog() {


    let title = 'React Study';

    let [ news, setNews ] = useState([ '오늘의 뉴스', '어제의 뉴스', '내일의 뉴스' ]);
    let [ num, setNum ] = useState(0);
    let text = '내용 무';


    function heartClick(event) {
        event.stopPropagation();
        setNum(num + 1);
    }

    function newsChange() {
        // setNews(news.filter((value) => {
        //     return value !== '오늘의 뉴스';
        // }))

        // setNews(news => [ 'Today News', ...news ]);

        news.shift();
        setNews(news => [ 'Today News', ...news ]);

        // let temp = [...news];
        // temp.splice(0,1, 'Today News');
        // setNews(temp);
    }

    let [ modalFlag, setModal ] = useState(false);

    function onOff() {

        if (modalFlag) {
            setModal(false)
        } else {
            setModal(true)
        }
    }

    return (

        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: '20px' }}>{title}</div>
            </div>

            <div className='post-list'>
                <h4 onClick={() => {onOff()}}>{news[ 0 ]} <span className='heart' onClick={(event) => { heartClick(event); }}>♥</span>
                    <span className='font-size'>{num}</span></h4>
                <p>{text}</p>
            </div>

            <div className='post-list'>
                <h4>{news[ 1 ]}</h4>
                <p>{text}</p>
            </div>

            <div className='post-list'>
                <h4>{news[ 2 ]}</h4>
                <p>{text}</p>
            </div>


            <button onClick={() => { newsChange() }}>제목 변경</button>
            {
                modalFlag == true ? <Modal /> : null

            }

        </div >
    )
}