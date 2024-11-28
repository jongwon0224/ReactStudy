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

    let [ selectedTitle, setSelectedTitle ] = useState('');
    let [ selectedNumCount, setSelectedNumCount ] = useState(0);
    let [ inputText, setInputText ] = useState('');



    function newsChange() {
        // setNews((news) => [ 'Today News', ...news ]);

        // let temp = [...news];
        // news.shift();
        // setNews(news => [ 'Today News', ...news ]);

        let temp = [ ...news ];
        temp.splice(0, 1, 'Today News');
        setNews(temp);
    }

    let [ modalFlag, setModal ] = useState(false);


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
                            <h4 onClick={() => {
                                if (modalFlag) {
                                    setModal(false)
                                } else {
                                    setModal(true)
                                }

                                setSelectedTitle(item);
                                setSelectedNumCount(num[ index ]);
                            }}>{item}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [ ...num ];
                                    temp[ index ]++;
                                    setNum(temp);

                                }}>♥</span>
                                <span className='font-size'>{num[ index ]}</span></h4>
                            <p>{text}</p>


                            {/* Splice는 파괴적 메소드로 배열을 복사해서 사용해야됨 */}
                            <button onClick={() => {
                                let temp = [ ...news ];
                                temp.splice(index, 1);
                                setNews(temp);
                            }}>삭제</button>


                            {/* filter, slice는 비파괴적 요서 => 특정 부분을 복사하여 새 배열 생성
                            새로운 배열 만들 필요 없음. */}
                            <button onClick={() => {
                                setNews((news) => news.slice(1));
                            }}>삭제</button>

                            <button onClick={() => {
                                setNews(news.filter((value) => {
                                    return value != news[ index ];
                                }))
                            }}>삭제</button>

                        </div>);
                })
            }

            <button onClick={() => { newsChange() }}>제목 변경</button>


            <div>
                <input type='text' id='input_news' value={inputText} onChange={(event) => {
                    setInputText(event.target.value);
                }} />

                <button onClick={() => {

                    // setNews((news) => [ ...news, inputText ]);

                    // 전제조건 : 양측에 있는 띄어쓰기는 제외 (trim)
                    // 띄어쓸 가능성도 있어서 공백있을경우 => trim으로 대체
                    //입력된 값에서 띄어쓰기 제거 먼저 해줌
                    inputText = inputText.trim();

                    if (inputText == '' || inputText.length == 0 || inputText == null || inputText == undefined) {
                        return; //false일경우 바로 끝내버림
                    }

                    let temp = [ ...news ];

                    temp.push(inputText);
                    setNews(temp);
                    num.push(0); //새로운 데이터에 숫자 출력
                    setInputText('');

                }}>발행</button>
            </div>

            {
                modalFlag == true ? <Modal title={selectedTitle} news={news} setNews={setNews} bgColor={'lightGreen'} num={selectedNumCount} /> : null
            }

        </div >
    )
}