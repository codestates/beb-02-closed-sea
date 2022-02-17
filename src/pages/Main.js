
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'



function Main() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="ALPACADABRAZ.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>ALPACADABRAZ</h3>
                        <p>Created by ALPACADABRA</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="CryptoPunks.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>CryptoPunks</h3>
                        <p>One of the inspirations for the ERC-721 standard.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="adidas.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>adidas Originals Into the Metaverse</h3>
                        <p>Created by adidasOriginals</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br><br></br>
            <h3>Notable Drops</h3>
            <br></br>
            <CardGroup className="cardGroup">
                <Card>
                    <Card.Img variant="top" src="skyweaver-promocard.webp" />
                    <Card.Body style={{backgroundColor: "#432aa1", color: 'white'}}>                      <Card.Title>A Trading Card Game</Card.Title>
                        <Card.Text>
                            Get these exclusive cards to build your collection
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 5 days ago</small>
                    </Card.Footer>
                </Card>
                <div>&nbsp;&nbsp;&nbsp;</div>
                <Card>
                    <Card.Img variant="top" src="giselle-promocard.webp" />
                    <Card.Body style={{backgroundColor: "#71a892", color: 'white'}}>
                        <Card.Title>Stripes and Shadows</Card.Title>
                        <Card.Text>
                            Some figurative, some abstract, all smooth and crisp{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 2 days ago</small>
                    </Card.Footer>
                </Card>
                <div>&nbsp;&nbsp;&nbsp;</div>
                <Card>
                    <Card.Img variant="top" src="katherin-promocard.webp" />
                    <Card.Body style={{backgroundColor: "#5e5f61", color: 'white'}}>
                        <Card.Title>Kathrin Federer</Card.Title>
                        <Card.Text>
                            Combining digital art and photography to create unique imaginary worlds
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 4 days ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            
        </div>
    );
}

export default Main