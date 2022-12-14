import React from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import dsc from '../media/DSC.webp'
import scr from '../media/SCR.webp'
import gotg from '../media/GOTG.webp'
import rfp from '../media/RFP.webp'
import ca from '../media/CA.webp'
import tcd from '../media/TCD.webp'
import oi from '../media/OI.webp'
import fsf from '../media/FSF.webp'
import wm from '../media/WM.webp'
import rc from '../media/RC.webp'
import tf from '../media/TF.webp'
import uv from '../media/UV.webp'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br />
            <Fade>
                <Container>
                    <br />
                    <h2 className="lead" align="center"><b>- Experience and Projects -</b></h2>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={oi} alt="Oracle Internship" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Oracle</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Server Technology Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Database and Transactions<br />Studied the lifecycle of a transaction and analysed the redo-log files of transactions in Oracle Database.
                                                        <br />Developed a tool to analyse the Redo dumps automatically in Perl using Regex pattern.
                                                        <br />Minimised the detection time of anomalies in Redo dumps by 80%.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={fsf} alt="FirstSalary-Foundation" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">FirstSalary Foundation</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Full Stack Development Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Web Development
                                                        <br />Worked on UI/UX planning and designing to enhance the user experience by 30%.
                                                        <br />Created 6 REST APIs with Django for Product Marketplace and accessed them from different views.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={wm} alt="Webminix" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Webminix</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Software Development Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Web Development
                                                        <br />Led the backend team to work on APIs for using NodeJS enhancing production by over 25%.
                                                        <br />Accelerated development time by 20% using (Scrum) Agile Methodology.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={uv} alt="Unvoiced" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Unvoiced</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Pre-final Year | Mini Project</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Deep Learning<br />Conducted research and literature survey on various existing models for transcription of visual cues to interpret spoken languages.
                                                        <br />Model is trained on a structured dataset MIRACLE-VC1.
                                                        <br />Preprocessing is done by converting the ROI detected by Haar-Cascade to convert to grayscale and normalising the data.
                                                        <br />Training model was trained using a total of 8 layers of Convolutional Neural Network.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={rc} alt="Rotaract Club" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Rotaract Club of New Kalyan</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Full Stack Development Intern</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Domain - Web Development
                                                        <br />Worked on UI/UX planning and designing to enhance the user experience by 30%.
                                                        <br />Created 6 REST APIs with Django for Product Marketplace and accessed them from different views.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={scr} alt="Student Council" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Student Council</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Treasurer and Representative of Department of Computer Science and Technology, UMIT</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Managed and helped students in their curriculum and other difficulties.
                                                        <br />Co-organized annual fest 'Arcane Illusions'.
                                                        <br />Coordinated between faculties and students about studies and other activities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tcd} alt="Toxic Comment Detector" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Toxic Comment Detector</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">A Chrome Extension which can detect whether the input text is Positive or Negative.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Implemented Linear Regression Algorithm of Scikit-Learn library on well-preprocessed dataset of Kaggle.
                                                        <br />Hosted the Machine Learning Model on Heroku and Mia, integrated the hosted model in a Chrome Extension.
                                                        <br />Achieved ROC AUC Score of 93.5%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://tejaswi-chaudhari-streamlit-tcd-app-40pvb7.streamlit.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/Toxic-Comment-Classification" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={gotg} alt="InternExperience" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">InternExperience</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">During this internship, I am building a web app to help people with their public speaking ability</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Planned the UI for website and designed frontend using ReactJs and React-Bootstrap
                                                        <br />Built Database models using Django Rest Framework and SQLite
                                                        <br />Created APIs to integrate frontend and backend together
                                                        <br />Dockerized the Web Application
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://gift-of-the-gab.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={ca} alt="CharitAble" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">CharitAble</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">A Fundraising Web App where people can start a fundraiser for free</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Developed a Fundraising Web App where people can start a fundraiser for free and also contribute to other ongoing fundraisers.
                                                        <br />This website can connect you to different Blood Banks as a Donor and Patient.
                                                        <br />Tech Stack - ReachJs, Bootstrap, Cloud Firestore
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://charit-able.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/CharitAble" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br />
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={rfp} alt="Rooted - Portal for farmers" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Rooted - Portal for farmers</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Developed a Portal for Farmers to sell their goods at a better rate.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>User-friendly and clean basic scripted website
                                                        <br />Tech Stack - HTML, CSS, JavaScript
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://rooted-portal.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/SheHacks-Hack-O-holics/SheHacks" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={dsc} alt="Google Developer Student Clubs" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Google Developer Student Clubs</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Current GDSC Lead and Former-Core Team Member of GDSC UMIT</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Created and managing a team of 18 people and a community of 300+ members
                                                        <br />Organized Study Jams, Hackathons and Webinars.
                                                        <br />Hosted events of Google Cloud and Machine Learning.
                                                        <br />Guided students in Google Cloud and Android Development Study Jams
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://gdsc-umit.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Website</Button>
                                        </a>
                                        <a href="https://linktr.ee/gdsc_umit" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Social Handles</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                            <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br />
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={tf} alt="Tripti Foundation" height="169px" width="300px" />
                                                    <Card.Body>
                                                        <Card.Title align="center">Tripti Foundation</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Web application for hunger relief to give a real time solution</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>Engineered a solution for Hunger relief using MERN Stack.
                                                        <br />Integrated payment gateways like Celo and Razorpay.
                                                        <br />Used Google Maps API to locate the nearest help seekers in the region.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br />
                                    <div>
                                        <a href="https://triptifoundation.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/Tejaswi-Chaudhari/Tripti" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br />
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                </Container>
            </Fade>
            <br />
            <hr />
            <br />
        </div>
    )
}

export default Experience
