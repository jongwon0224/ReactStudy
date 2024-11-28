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


export default function FoodCard(food, foods, index) {


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food.imgPath} />
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{food.content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>

    )
}