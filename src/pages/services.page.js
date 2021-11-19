import { Container, Row, Col } from 'react-bootstrap'
import { Pageheader } from '../container/pageHeader.container';
import kfmTruck from '../images/kfm_truck.jpg';
import kfmWork from '../images/kfm_work.jpg';

export function ServicesPage() {
    

    return (
        <>
         <Pageheader title="Services" />
         <Container className="mt-4 mb-5">
            <Row className="about-btm service-page">

            <Col className="col-12 col-md-6">
            <div className="ml-2 about-btm__item">
                <div className="img-box">
                    <img src={kfmTruck} alt="kfmTruck" className="img-fluid rounded" />
                </div>
            <h2 className="main-head mt-4">Wholesale Distribution</h2>
            <p>Our distribution scheme allows Micro Small &amp; Medium Enterprises (MSMEs) to participate with minimum wholesale purchase package.</p>
            </div>
            </Col>
            <Col className="col-12 col-md-6">
            <div className="about-btm__item">
            <div className="img-box">
            <img src={kfmWork} alt="kfmWork" className="img-fluid rounded" />
                </div>
              
            <h2 className="main-head mt-4">Flour Milling</h2>
            <p>Kings Flour Mill produces high quality wheat based flour and Agro allied products.</p>
            </div>
            </Col>
            </Row>

         </Container>
         </>
    )
}
