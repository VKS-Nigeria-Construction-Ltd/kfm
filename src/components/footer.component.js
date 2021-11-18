import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import kfmLogoWhite from '../images/kfm_logo_white.png';

export default function Footer() {
    

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="col-12 col-md-2 footer-logo">
                        <img src={kfmLogoWhite} alt="KFM Logo" className="img-fluid" />
                    </Col>
                    <Col className="col-12 col-md-7  pl-4">
                        <p className="text-center">Kings Flour Mill is established for the production of high quality wheat flour and Agro allied products.</p>
                    </Col>
                    <Col className="col-12 col-md-3">
                        <ul className="social-links d-flex">
                            <li className="mr-2">
                                <a href="https://www.facebook.com/kingsflourmill/" target="_blank" rel="noopener noreferrer"><FaFacebook color="#fff" /></a>
                            </li>                            
                            <li className="mr-2">
                                <a href="https://www.twitter.com/kingsflourmill/" target="_blank" rel="noopener noreferrer"><FaTwitter color="#fff" /></a>
                            </li>
                            <li className="mr-2">
                                <a href="https://www.instagram.com/kingsflourmill/" target="_blank" rel="noopener noreferrer"><FaInstagram color="#fff" /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/kings-flourmill" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#fff" /></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
