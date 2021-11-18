import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';

export function HealthSection() {
    

    return (
        <div className="health-section">
                <Row style={{"marginRight": '0'}}>
                <Col className="col-12 col-md-7"></Col>
                <Col className="col-12 col-md-5 health-section__red">
                    <Container>

                    <h2 className="main-head mt-4">KFM is a key player in the</h2>
                    <h2 className="primary-head"><strong>Flour Milling Industry</strong> in Nigeria</h2>
                    </Container>
                </Col>
                </Row>
                <Row style={{"marginRight": '0'}}>
                <Col className="col-12 col-md-4"></Col>
                <Col className="col-12 col-md-8 health-section__dark">
                    <Container>

                    <h4 className="text-uppercase kfm_red">Measurements</h4>
                    <h2 className="primary-head">We Take Occupational Health &amp; <strong>Safety Measurements</strong></h2>
                    <p>Our Health, Safety and Environment Team drives solutions that are tailored to conducive working conditions and based on participation</p>
                    <Row>
                        <Col>
                            <h4 className="sub-head"><BsCheckCircleFill color="#c3002f"/> Safety At Work</h4>
                            <p>We make workplace safe any aspects for employees</p>
                        </Col>
                        <Col>
                        <h4 className="sub-head"><BsCheckCircleFill color="#c3002f"/> Healthy Place</h4>
                            <p>Activities are perform by experts at enterprise level</p>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                </Row>
        </div>
    )
}
