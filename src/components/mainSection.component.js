import { Container, Row, Col } from "react-bootstrap";
import { FaCogs, FaShippingFast, FaRegHandshake, FaCertificate } from 'react-icons/fa';
import kfmPreview from '../images/kfm_preview.jpg';


export function Mainsection() {
    

    return (
      <Container className="main-section">
          <Row>
            <Col className="col-12 col-md-4">
                <h4 className="text-uppercase kfm_red sub-head">KINGS FLOUR MILL</h4>
                <h2 className="primary-head">What we <strong>Believe</strong></h2>
                <p>We believe that Premium quality flour should be available to everyone for both industrial and domestic consumption nationwide and beyond.</p>
            </Col>
            <Col className="right_border col-12 col-md-4">
                <FaCogs size={50} color="#c3002f" />
                <h2 className="text-uppercase main-head mt-4">Production</h2>
                <h4 className="kfm_red sub-head">Driven By Innovation</h4>
                <p>Our production processes are purely driven by state of the art technology and innovative industrial manufacturing solutions, we want our consumers to get the very best that flour has to offer.</p>
                <h6 className="text-uppercase">Read more</h6>
            </Col>
            <Col className="col-12 col-md-4">
                <FaShippingFast size={50} color="#c3002f" />
                <h2 className="text-uppercase main-head mt-4">DISTRIBUTION</h2>
                <h4 className="kfm_red sub-head">Closer to you than ever before</h4>
                <p>Kings Flour is closer to you than ever before, literally just a phone call away.</p>
                <h6 className="text-uppercase">Read more</h6>
            </Col>
          </Row>
          <Row>
            <Col className="kfm_preview col-12 col-md-4">
                <img src={kfmPreview} alt="kfmPreview" className="img-fluid" />
                <p>One of the key producers of high quality <span className="kfm_red text-underline">Wheat Flour</span></p>
            </Col>
            <Col className="right_border bottom_border col-12 col-md-4">
                <FaCertificate size={50} color="#c3002f" />
                <h2 className="text-uppercase main-head mt-4">QUALITY</h2>
                <h4 className="kfm_red sub-head">Second To None</h4>
                <p>Quality assurance being a core sales driver plays a very significant part in our value proposition. We have teams who are seasoned professionals and understand this.</p>
                <h6 className="text-uppercase">Read more</h6>
            </Col>
            <Col className="bottom_border col-12 col-md-4">
                <FaRegHandshake size={50} color="#c3002f" />
                <h2 className="text-uppercase main-head mt-4">PUBLIC RELATIONS</h2>
                <h4 className="kfm_red sub-head">with great flour comes great responsibilities</h4>
                <p>Keeping faith with a trusted brand is the way to go.</p>
                <h6 className="text-uppercase">Read more</h6>
            </Col>
          </Row>
      </Container>
    )
}
