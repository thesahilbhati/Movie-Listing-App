import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const ContactContainer = () => {
    const myData = [
        { name: 'Facebook', link: 'https://www.facebook.com/thecentyrajput', text: 'Follow to my facebook.' },
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/thesahilbhati', text: 'Follow to my linkedin.' },
        { name: 'Twitter', link: 'https://twitter.com/centyrajput', text: 'Follow to my twitter.' },
        { name: 'GitHub', link: 'https://github.com/thesahilbhati', text: 'Follow to my github account.' },
        { name: 'YouTube', link: 'https://www.youtube.com/@centyrajput', text: 'Follow to my youtube channel.' },
        { name: 'Email', link: 'mailto:workwithsahilbhati@gmail.com', text: 'write mail to me' }
    ]
    return (
        <div className='contactWrap'>
            <Container>
                <Row>
                    <Col>
                        <p>CONNECT WITH US</p>
                        <h1>Get in Touch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='conectIcon'>
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
                </Row>
                <Row>
                    <Col>
                        <ListGroup className='contactList'>
                            {
                                myData && myData.length > 0 ? myData.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.name}>
                                            <span>{item.text}</span>
                                            <a href={item.link} rel="noreferrer" target="_blank">
                                                {item.link}
                                            </a>
                                        </ListGroup.Item>
                                    )
                                }) : ''
                            }

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactContainer;