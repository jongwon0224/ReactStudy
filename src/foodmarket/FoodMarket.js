import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import banner_bg from './banner_bg.jpg';
import food1 from './food1.jpg';

import foodsData from '../data/foodsData';
import { useState } from 'react';
import FoodCard from './FoodCard';

export default function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#hg" style={{ fontSize: '30px', fontWeight: 'bold' }}>Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ margin: '10px' }}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{ margin: '10px' }}>Food Detail</Nav.Link>
                        <Nav.Link href="#pricing" style={{ margin: '10px' }}>Information</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 1. css 이미지 경로
            2. js에서 import후 사용 => <img src= {banner_bg})/>
            3. public폴더에 저장후 사용
            3-1. img src={'/food1/jpg'}
            3-2. img src={process.env.public_url + '/food.jpg'} */}
            <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ') ' }}></div>

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
                    
                    


                    {/* <Col md={4} sd={2}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={'./image/food2.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[ 1 ].title}</Card.Title>
                                <Card.Text>{foods[ 1 ].content}</Card.Text>
                                <Card.Text>{foods[ 1 ].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sd={8}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={'./image/food3.jpg'} />
                            <Card.Body>
                                <Card.Title>{foods[ 2 ].title}</Card.Title>
                                <Card.Text>{foods[ 2 ].content}</Card.Text>
                                <Card.Text>{foods[ 2 ].price}</Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>

        </div>
    )
}