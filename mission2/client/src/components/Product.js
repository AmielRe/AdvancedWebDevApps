import React, { Component } from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class Product extends Component {
    render() {
        return (
            <Col>
                <Card className="mb-3" bg={'light'}>
                    <Card.Img variant=" top" text="dark" />
                    <Card.Body className="text-center">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Bread
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card >
            </Col>

        );
    }
}

export default Product;