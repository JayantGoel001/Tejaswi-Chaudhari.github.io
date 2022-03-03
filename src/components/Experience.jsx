import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import dsc from '../media/DSC.webp'
import scr from '../media/SCR.webp'
import gotg from '../media/GOTG.webp'
import rfp from '../media/RFP.webp'
import ca from '../media/CA.webp'
import tcd from '../media/TCD.webp'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Modal from 'react-bootstrap/Modal'

const Experience = ({ darkMode }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br/>
            <Fade>
                <Container>
                    <br/>
                    <h2 className="lead" align="center"><b>- Experience -</b></h2>
                    <br/>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tcd} alt = "Toxic Comment Detector" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">Toxic Comment Detector</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">A Chrome Extension which can detect whether the input text is Positive or Negative.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Implemented Linear Regression Algorithm of Scikit-Learn library on well-preprocessed dataset of Kaggle.
                                                        <br/>Hosted the Machine Learning Model on Heroku and Mia, integrated the hosted model in a Chrome Extension.
                                                        <br/>Achieved ROC AUC Score of 93.5%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <a href="https://miamarketplace.com/apps/LG7MrdG4a9anFy3ZxQ4hiHeGZEQtsAlpkt0JBGz3fvJs" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/Toxic-Comment-Classification" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={gotg} alt="InternExperience" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">InternExperience</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">During this internship, I am building a web app to help people with their public speaking ability</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Planned the UI for website and designed frontend using ReactJs and React-Bootstrap
                                                        <br/>Built Database models using Django Rest Framework and SQLite
                                                        <br/>Created APIs to integrate frontend and backend together
                                                        <br/>Dockerized the Web Application
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <Modal show={show} onHide={handleClose} className="modal">
                                            <Modal.Body>Heya! The project is in development mode, you can visit the repository and have a look. Feel free to contribute!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="outline-dark" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <a href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab" target="_blank" rel="noreferrer noopener">
                                                    <Button variant="outline-dark">View Github Repo</Button>
                                                </a>
                                            </Modal.Footer>
                                        </Modal>
                                        <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={handleShow} className="sbtn">View Project</Button>
                                        <a href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={ca} alt="CharitAble" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">CharitAble</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">A Fundraising Web App where people can start a fundraiser for free</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Developed a Fundraising Web App where people can start a fundraiser for free and also contribute to other ongoing fundraisers.
                                                        <br/>This website can connect you to different Blood Banks as a Donor and Patient.
                                                        <br/>Tech Stack - ReachJs, Bootstrap, Cloud Firestore
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <a href="https://charit-able.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/CharitAble" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br/>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={rfp} alt = "Rooted - Portal for farmers" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">Rooted - Portal for farmers</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Developed a Portal for Farmers to sell their goods at a better rate.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>User-friendly and clean basic scripted website
                                                        <br/>Tech Stack - HTML, CSS, JavaScript
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <a href="https://rooted-portal.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/SheHacks-Hack-O-holics/SheHacks" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={dsc} alt="Google Developer Student Clubs" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">Google Developer Student Clubs</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Current GDSC Lead and Former-Core Team Member of GDSC UMIT</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Created and managing a team of 18 people and a community of 300+ members
                                                        <br/>Organized Study Jams, Hackathons and Webinars.
                                                        <br/>Hosted events of Google Cloud and Machine Learning.
                                                        <br/>Guided students in Google Cloud and Android Development Study Jams
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <a href="https://dscumit.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Website</Button>
                                        </a>
                                        <a href="https://www.instagram.com/dsc__umit/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br/>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={scr} alt="Student Council" height="169px" width="300px"/>
                                                    <Card.Body>
                                                        <Card.Title align="center">Student Council</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Representative of Department of Computer Science and Technology, UMIT</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Managed and helped students in their curriculum and other difficulties.
                                                        <br/>Co-organized annual fest 'Arcane Illusions'.
                                                        <br/>Coordinated between faculties and students about studies and other activities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br/>
                                    <div>
                                        <a href="https://www.instagram.com/umit_sc/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                                        </a>
                                    </div>
                                    <br/>
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                </Container>
            </Fade>
            <br/>
            <hr/>
            <br/>
        </div>
    )
}

export default Experience
