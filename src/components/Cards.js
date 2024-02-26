import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './Cards.css'
import 'bootstrap/dist/css/bootstrap.css';


function Cards() {
    return (
        <Row xs={1} md={4} className="g-4">

           <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\Building-materials.jpg" />
                    <Card.Body>
                        <Card.Title>Building Materials</Card.Title>
                        
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\tools.jpg" />
                    <Card.Body>
                        <Card.Title>Tools</Card.Title>
                        
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\nails.jpg" />
                    <Card.Body>
                        <Card.Title>Screws, Nails & fittings</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\Adhesives & Sealants Kopie_2000x900_10.jpg" />
                    <Card.Body>
                        <Card.Title>Sealants & adhesives</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\Doors-and-Windows.jpeg" />
                    <Card.Body>
                        <Card.Title>Doors and Windows</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\pipes and fittings.jpeg" />
                    <Card.Body>
                        <Card.Title>Pipes & Fittings</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\Metal-Roof-Sheets-Aluzinc-Coat.jpg" />
                    <Card.Body>
                        <Card.Title>Ironsheets and roofing</Card.Title>
                    </Card.Body>
                </Card>
            </a>
            <a href="#" >
                <Card className='Card'>
                    <Card.Img variant="top" src="\images\ceramic-wall-and-floor-tiles-740x493.jpg.webp" />
                    <Card.Body>
                        <Card.Title>Floors and Tiles</Card.Title>
                    </Card.Body>
                </Card>
            </a>






        </Row>
    );
}

export default Cards;