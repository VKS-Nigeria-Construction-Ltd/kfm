import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container';
import kfmPreview from '../images/kfm_preview.jpg';
import {Helmet} from "react-helmet";

export function AboutPage() {
    <Helmet>
       <title>About | KINGS FLOUR MILL – HAPPINESS BEGINS NOW</title>
    </Helmet>

    return (
        <>
         <Pageheader title="About Us" />
         <Container className="mt-4 mb-5">
            

            <Row>
                <Col className="col-12 col-md-6 mb-4">
                    <h1>About Kings FlourMill</h1>
                    <p>Kings Flour Mill Limited was established in 2019 born out of desires of investing partners to meet the growing needs for superior Wheat based Flour and other Agro-allied products.</p>
                    <h4>Our Vision</h4>
                    <p>The vision of the company is to be No. 1 Agric-based company in Africa providing solutions to support players in the Agro-processing value chain.</p>
                    <h4>Our Mission</h4>
                    <p>To produce wheat based products using the best global practices and processes; harnessing environmentally friendly technology and people capabilities.</p>
                </Col>
                <Col className="col-12 col-md-6 mb-4">
                    <img src={kfmPreview} alt="Kings Flour Mill" className="img-fluid rounded about-img" />
                </Col>
            </Row>
         </Container>
         </>
    )
}
