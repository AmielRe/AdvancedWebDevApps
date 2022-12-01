import React, { Component } from 'react';
import './ProductGrid.css';
import Product from './Product'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class ProductGrid extends Component {
    render() {
        return (
            <Container className='p-4'>
                <Row lg="6" md="4" sm="3">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </Row>
            </Container>
        );
    }
}

export default ProductGrid;