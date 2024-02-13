import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = () => {

    return (
        <>
            <footer className='myFooter'>
                <Container>
                    <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow Me :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://www.facebook.com/thecentyrajput" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/thesahilbhati" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/centyrajput" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/thesahilbhati" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.youtube.com/@centyrajput" target="_blank">
                                        <BsYoutube />
                                    </a>
                                </li>
                            </ul>

                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>©2024. Developed and Designed  by <a href="https://www.youtube.com/@centyrajput" target="_blank" rel="noreferrer">SAHIL BHATI</a>.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;