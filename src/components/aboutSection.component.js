import { Col, Container, Row } from 'react-bootstrap';
import { BsCheck2 } from 'react-icons/bs';
import flourmillBag from '../images/flourmillbag.jpg';
import kfmTruck from '../images/kfm_truck.jpg';
import kfmWork from '../images/kfm_work.jpg';
import kfmQuality from '../images/quality.jpg';

export function AboutSection() {

    return (
        <div className="about-section">
       <Container>
           <Row>
               <Col className="col-12 col-md-6">
               <h4 className="text-uppercase kfm_red sub-head">KINGS FLOUR MILL</h4>
               <h2 className="primary-head">An Emerging <strong>Market Force</strong></h2>
               <p>The company was established for the production of superior quality wheat based flour and other Agro allied products. The initial installed production capacity of the mill is 500 metric tons per day.</p>

               <Row>
                    <Col>
                        <p> <BsCheck2 color="#c3002f" /> Best quality flour is our priority</p>
                    </Col>
                    <Col>
                        <p><BsCheck2 color="#c3002f" /> Your favorite business partner</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><BsCheck2 color="#c3002f" /> Premium starts at the source</p>
                    </Col>
                    <Col>
                        <p><BsCheck2 color="#c3002f" /> Quality that ensures food safety</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p><BsCheck2 color="#c3002f" /> Driven by innovation &amp; technology</p>
                    </Col>
                    <Col>
                        <p></p>
                    </Col>
                </Row>

               </Col>
               <Col className="col-12 col-md-6 flourmill_bag">
                   <div className="bag_container">
                        <img src={flourmillBag} alt="flourmill bag" className="img-fluid" />
                   </div>
               </Col>
           </Row>

            <Row className="about-btm">
            <Col className="col-12 col-md-4">
                <div className="ml-2 about-btm__item">
                <div className="img-box">
                <img src={kfmQuality} alt="kfmQuality" className="img-fluid rounded" />
                </div>
                <h2 className="main-head mt-4">Safety and Quality</h2>
                <p>The production system from milling to packaging stage is automated, which eliminates over 90%  of the safety threats posed by production factories.</p>
                </div>
            </Col>
            <Col className="col-12 col-md-4">
            <div className="ml-2 about-btm__item">
                <div className="img-box">
                    <img src={kfmTruck} alt="kfmTruck" className="img-fluid rounded" />
                </div>
            <h2 className="main-head mt-4">Wholesale Distribution</h2>
            <p>Our distribution scheme allows Micro Small &amp; Medium Enterprises (MSMEs) to participate with minimum wholesale purchase package.</p>
            </div>
            </Col>
            <Col className="col-12 col-md-4">
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
       </div>
    )
}
