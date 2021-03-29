import React from 'react';
import OutstretchedArms from '../../img/OutstretchedArms.jpg';
import Rosary from '../../img/Rosary.jpg';
import BuddhistTemple from '../../img/BuddhistTemple.jpg';

//Bootstrap Components
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function MainCarousel() {
    return(
        <Container fluid className="p-0">
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100 img-fluid mx-auto carousel-item"
                    src={Rosary}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100 img-fluid mx-auto carousel-item"
                    src={BuddhistTemple}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                    className="d-block w-100 img-fluid mx-auto carousel-item"
                    src={OutstretchedArms}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default MainCarousel;