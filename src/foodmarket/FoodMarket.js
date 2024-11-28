import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';

import foodsData from '../data/foodsData';
import { useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';

export default function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);


    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: '30px', fontWeight: 'bold' }}>Market</Navbar.Brand>
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



            <Routes>

                <Route path='/' element={<Home foods={foods}/>}/>
                
                <Route path="/detail" element={<h1>detail page</h1>} />
                <Route path="/info" element={<h1>info page</h1>} />

            </Routes>

        </div>
    )
}