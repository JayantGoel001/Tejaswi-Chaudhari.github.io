import React from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import connectLight from '../media/connect-light.webp';
import connectDark from '../media/connect-dark.webp';
import resume from '../media/TejaswiChaudhari_Resume.pdf'
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
                    <p>I am a <strong>Sophomore</strong> at Usha Mittal Institute of Technology, Department of <strong>Computer Science and Technology</strong>. I believe that learning is a stream and it ought not to stop. I am a <strong>passionate developer</strong> and believe in <strong>networking</strong> a lot. Many things excite me in this expanse of technology, and I like to explore and keep my options open all the time. I am up for challenges that take me by surprise. I'm comfortable working on any domain if I find the project is worth it. You can imagine me focused on the laptop screen and typing or taking down notes. Apart from technical things, I enjoy good books and verses, and I have a good eye for art.<br/>
                      Now that you know me a bit, please feel free to drop a text so that we can start a<strong> conversation.</strong></p>
                  </Card.Text>
                  <a href={resume} target="_blank" rel="noreferrer noopener">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                      <FontAwesomeIcon className="dark" size="lg" icon={faFile} /> View Resume
                    </Button>
                  </a>
                  <a href={resume} download>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className='a'>
                      <FontAwesomeIcon className="dark" size="lg" icon={faFile} /> Download Resume
                    </Button>
                  </a>
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
