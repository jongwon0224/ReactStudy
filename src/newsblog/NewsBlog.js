import { useState } from 'react';
import './NewBlog.css';
import Modal from './Modal';

export default function NewsBlog() {


    let title = 'React Study';
    // 글제목 3개
    let [ news, setNews ] = useState([ '오늘의 뉴스', '어제의 뉴스', '내일의 뉴스' ]);
    // 좋아요 3개
    let [ num, setNum ] = useState([ 0, 0, 0 ]);
    let text = '내용 무';



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

            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4 onClick={() => { onOff() }}>{item}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [ ...num ];
                                    temp[ index ]++;
                                    setNum(temp);
                                }}>♥</span>
                                <span className='font-size'>{num[ index ]}</span></h4>
                            <p>{text}</p>
                        </div>);
                })
            }

            <button onClick={() => { newsChange() }}>제목 변경</button>

            {
                modalFlag == true ? <Modal news={news} setNews={newsChange} bgColor={'lightGreen'} /> : null
            }

        </div >
    )
}