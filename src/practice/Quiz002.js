
import Props01 from '../components/Props01';
import QuizProps002 from './QuizProps002';
import { useState } from 'react';

export default function Quiz002() {

    let title = "제목";
    let [ title_num, setTitle ] = useState([ '하나', '둘', '셋', '넷', '다섯' ]);
    let detail = "내용";
    let [ detail_num, setDetail ] = useState([ '내용하나', '내용둘', '내용셋', '내용넷', '내용다섯' ]);

    return (
        <div>
            {title_num.map((item, index) => {
                return <QuizProps002 title={title} num={title_num[ index ]}
                    detail={detail} detail_num={detail_num[ index ]} />
            })}
        </div>
    );
}

