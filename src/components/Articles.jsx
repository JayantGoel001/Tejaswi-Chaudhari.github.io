import React from 'react'
import { JackInTheBox } from 'react-awesome-reveal'
import a1 from '../media/a1.webp'
import a2 from '../media/a2.webp'
import a3 from '../media/a3.webp'
import a4 from '../media/a4.webp'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'

const Articles = ({ darkMode }) => {
    const url1 = "https://medium.com/dsc-umit/the-famous-turing-test-91b8de154a12"
    const url2 = "https://medium.com/dsc-umit/react-dark-mode-tutorial-86cc373608ad"
    const url3 = "https://medium.com/dsc-umit/mvc-vs-mvt-architectural-pattern-d306a56dce55"
    const url4 = "https://medium.com/dsc-umit/dynamic-map-rendering-using-google-map-api-d7a0f83ff000"
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <JackInTheBox>
                <Container>
                    <br />
                    <h2 className="lead" align="center"><b>- Articles -</b></h2>
                    <br />
                    <CardGroup>
                        <Card onClick={() => window.open(url1, '_blank')}>
                            <Card.Img className='article-thumbnail' src={a1} />
                        </Card>
                        <Card onClick={() => window.open(url2, '_blank')}>
                            <Card.Img className='article-thumbnail' src={a2} />
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card onClick={() => window.open(url3, '_blank')}>
                            <Card.Img className='article-thumbnail' src={a3} />
                        </Card>
                        <Card onClick={() => window.open(url4, '_blank')}>
                            <Card.Img className='article-thumbnail' src={a4} />
                        </Card>
                    </CardGroup>
                    <center>
                        <a href="https://medium.com/@tejaswichaudhari" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Read More such articles</Button>
                        </a>
                    </center>
                </Container>
            </JackInTheBox>
            <br />
            <hr />
            <br />
        </div>
    )
}

export default Articles
