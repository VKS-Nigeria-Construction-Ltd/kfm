import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container';
import kfmPreview from '../images/kfm_preview.jpg';

export function AboutPage() {
    

    return (
        <>
         <Pageheader title="About Us" />
         <Container className="mt-4 mb-5">
            

            <Row>
                <Col className="col-12 col-md-6 mb-4">
                <h1>About Kings FlourMill</h1>
            <p>Kings Flour Mill Limited was established in 2019 born out of desires of investing partners to meet the growing needs for superior Wheat based Flour and other Agro-allied products.</p>
            <p>Kings Flour Mill produces premium quality and value Flour in its category in terms of product performance, yield and profitability</p>
                </Col>
                <Col className="col-12 col-md-6 mb-4">
                    <img src={kfmPreview} alt="Kings Flour Mill" className="img-fluid rounded about-img" />
                </Col>
            </Row>
         </Container>
         </>
    )
}
