import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import connectLight from '../media/connect-light.webp';
import connectDark from '../media/connect-dark.webp';
import resume from '../media/Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const About = ({ darkMode }) => {

  let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1800;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br/>
      <br/>
      <Fade>
        <Container align='center'>
          <Row>
            <Col lg={8} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead">Let's have an introduction!</h2></Card.Title>
                  <br/>
                  <Card.Text>
                    <p align="justify">I go by the saying, <strong>"Learning is a stream, and it ought not to stop."</strong> <br/>I am a final year student at Usha Mittal Institute of Technology in the Computer Science and Technology Department. I am a full-stack developer, a developer by passion and a designer by heart. I work with different tech stacks to create beautiful websites, React and Django being my top favorite. <br />My primary domains of interest are <strong>Machine Learning</strong> and <strong>Database Systems</strong>, backed by my projects and experience. I was always interested in multiple things, and multitasking gradually became a routine. I love networking, and I could spend hours talking about things. Effective communication is the only way to complete tasks in a team, so you might as well do well in it. If you offer me an opportunity, you have a great chance of having me, as I'm a sucker for good collaborations. <br/><i><strong>Feel free to connect!</strong></i></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align='center'>
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title><h2 className="lead">Let's Connect!</h2></Card.Title>
                  <br/>
                  <a href="https://www.linkedin.com/in/tejaswi-chaudhari/" target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                      <FontAwesomeIcon className="dark" size="lg" icon={faLinkedin} /> Tejaswi Chaudhari
                    </Button>
                  </a>
                  <a href="https://github.com/Tejaswi-Chaudhari" target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                      <FontAwesomeIcon className="dark" size="lg" icon={faGithub} /> Tejaswi-Chaudhari
                    </Button>
                  </a>
                  <a href={resume} download>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                      <FontAwesomeIcon className="dark" size="lg" icon={faFile} /> Download Resume
                    </Button>
                  </a>
                  <img src={darkMode ? connectDark : connectLight} alt="connect" className="connect-img img-fluid animated" height="187px" width="290px" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <hr/>
          <br/>
        </Container>
      </Fade>
    </div>
  )
}

export default About
