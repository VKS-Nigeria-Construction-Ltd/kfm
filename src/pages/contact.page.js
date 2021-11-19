import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../container/pageHeader.container'
import { FaMapMarkerAlt, FaRegEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export function ContactPage() {
    <Helmet>
      <title>Contact | KINGS FLOUR MILL – HAPPINESS BEGINS NOW</title>
    </Helmet>
    return (
        <>
         <Pageheader title="Contact Us" />
         <Container className="mt-4 mb-5">
            <Row>
                <Col className="col-12 col-md-6 mb-4">
                <h2 className="main-head text-uppercase mb-4">Kings Flour Mill</h2>
                    <div className="embeded-map">
                <iframe title="kfm location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16341.785502479312!2d7.8603197!3d4.6460344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067df43f5a7df9b%3A0x331e9dfba051512a!2sKINGS%20FLOUR%20MILL!5e1!3m2!1sen!2sng!4v1637312401613!5m2!1sen!2sng" width="100%" height="450" style={{"border": '0'}}  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </Col>
                <Col className="col-12 col-md-6 pl-4">
                    <h4 className="text-uppercase kfm_red sub-head">Contact Us</h4>
                    <h2 className="primary-head">Get In <strong>Touch!</strong></h2>
                    <p>Should you have any questions, please feel free to contact us.</p>

                    <h4 className="text-uppercase sub-head border-bottom pb-4">Our Office</h4>
                    <Row className="mt-4 border-bottom pb-4">
                        <Col className="border-right">
                            <h5 className="pb-2"><FaMapMarkerAlt size={20} color="#c3002f" /> Address</h5>
                            <p>Kings Flour Mill, Onna LGA, Akwa Ibom State, Nigeria</p>
                        </Col>
                        <Col>
                            <h5 className="pb-2"><FaRegEnvelope size={20} color="#c3002f" /> Call Us / Email</h5>
                            <p>(+234) 0810 001 1800</p>
                            <p>(+234) 0902 222 6722</p>
                            <p>info@kingsflourmill.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
         </Container>
         </>
    )
}
