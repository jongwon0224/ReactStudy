import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/esm/Col';
import FoodCard from '../components/FoodCard';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Home(foods) {

    // main Page 컴포넌트 따로 빼냄

    return (
        <div>
            <div className='main-bg' style={{ backgroundImage: 'url(/image/banner_bg.jpg)' }}></div>
            <br /><br />
            <Container>
                <Row>
                    {/* <Col md={4} sd={2}><FoodCard food={foods[ 0 ]} content={foods[ 0 ].content} price={foods[ 0 ].price} /></Col>
                    <Col md={4} sd={2}><FoodCard food={foods[ 1 ]} content={foods[ 1 ].content} price={foods[ 1 ].price} /></Col>
                    <Col md={4} sd={2}><FoodCard food={foods[ 2 ]} content={foods[ 2 ].content} price={foods[ 2 ].price} /></Col> */}

                    {foods.map((food, index) => {
                        return (
                            <Col md={4} sd={2}>
                                <FoodCard food={food} index={index} foods={foods} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div >
    )
}