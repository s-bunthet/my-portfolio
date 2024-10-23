import "./Home.css";
import linkedin from "../../images/linkedin.png";
import profile from "../../images/profile.png";
import github from "../../images/github.webp";
import pdf_assistant from "../../images/pdf_assistant.png";
import RandomImage from "../RandomImage/RandomImage";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Home=()=>{
    return (

        <Container fluid="md" className="px-4">
            <Navbar expand="lg"  >
                <Container className="justify-content-around">
                    <Navbar.Brand href="#home" >Mr.B</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row className="justify-content-center" >
                <Col className="text-center mb-4">
                    <a href="https://www.linkedin.com/in/say-bunthet-518318154/">
                        <img src={linkedin} alt="Linkedin" className="linkedin"/>
                    </a>
                    <img src={profile} alt="Profile Photo"/>
                    <a href="https://github.com/s-bunthet/">
                         <img src={github} alt="Github" className="github"/>
                     </a>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8} className="text-center mb-4">
                    <h1>Software Engineer/Project Manager</h1>
                    <p>Engineering Degree from <span className="blue">EN</span><span className="white">STA</span>
                        <span className="red">Paris</span></p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={4} className="px-0 mb-4">
                    <h2>3 Year+ Experience</h2>
                </Col>
                <Col md={4} className="ps-0 mb-4">
                <p>Upon completing my Software Engineering Degree at ENSTA Paris in 2020, I had an opportunity to join Paris Partners Software, a specialized company in software development for more than 20 years.</p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={4} className="pe-md-5 ps-0 mb-4">
                    <h2>Technologies</h2>
                     <Badge pill bg="primary" className="m-1">Java</Badge>
                     <Badge pill bg="primary" className="m-1">Php</Badge>
                     <Badge pill bg="primary" className="m-1">JavaScript</Badge>
                     <Badge pill bg="primary" className="m-1">Python</Badge>
                     <Badge pill bg="primary" className="m-1">C#</Badge>
                     <Badge pill bg="primary" className="m-1">Spring</Badge>
                     <Badge pill bg="primary" className="m-1">Zend</Badge>
                     <Badge pill bg="primary" className="m-1">Microsoft .Net</Badge>
                     <Badge pill bg="primary" className="m-1">Symfony</Badge>
                     <Badge pill bg="primary" className="m-1">Apache</Badge>
                     <Badge pill bg="primary" className="m-1">Linux</Badge>
                     <Badge pill bg="primary" className="m-1">MySQL</Badge>
                     <Badge pill bg="primary" className="m-1">PostgreSQL</Badge>
                     <Badge pill bg="primary" className="m-1">AI & Machine Learning</Badge>
                </Col>
                <Col md={4} className="ps-0 mb-4">
                    <h2>Languages</h2>
                    <Badge pill bg="primary" className="m-1">Khmer</Badge>
                    <Badge pill bg="primary" className="m-1">French</Badge>
                    <Badge pill bg="primary" className="m-1">English</Badge>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={8} className="mb-4">
                    <h2 className="ps-0">Projects</h2>
                    <Card style={{width: '18rem'}} className="bg-warning-subtle px-0">
                        <Card.Img variant="top" src={pdf_assistant}/>
                        <Card.Body>
                            <Card.Title>PDF Assistant</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <a href="#">Github</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        // <div className="container">
        //     <section className="header">
        //         <span className="name">Bunthet<span className="red">.</span></span>
        //         <a href="https://www.linkedin.com/in/say-bunthet-518318154/">
        //             <img src={linkedin}
        //                  alt="Linkedin"
        //                  className="linkedin"/>
        //         </a>
        //         <img src={profile} alt="Profile Photo" className="profile-image"/>
        //         <a href="https://github.com/s-bunthet/">
        //             <img src={github} alt="Github"
        //                  className="github"/>
        //         </a>
        //     </section>
        //     <section className="title">
        //         <h2>Software Engineer/Project Manager</h2>
        //         <p>Engineering Degree from <span className="blue">EN</span><span className="white">STA</span>
        //             <span className="red">Paris</span></p>
        //     </section>
        //     <section className="experience">
        //         <div className="experience-header">
        //             <p className="rainbow-color">3 Years +</p>
        //             <p className="bold">of experiences</p>
        //         </div>
        //         <div className="experience-desc">
        //             <p>Upon completing my Software Engineering Degree at ENSTA Paris in 2020, I had an opportunity to
        //                 join Paris
        //                 Partners Software, a specialized company in software development for more than 20 years.</p>
        //         </div>
        //     </section>
        //     <section className="skills">
        //         <div className="technologies">
        //             <span className="rainbow-color">Multiple</span>
        //             <p className="bold">programming languages & technologies</p>
        //             <span className="tech-list">
        //             <span>Java</span>
        //             <span>Php</span>
        //             <span>JavaScript</span>
        //             <span>Python</span>
        //             <span>C#</span>
        //             <span>Spring</span>
        //             <span>Zend</span>
        //             <span>Microsoft .Net</span>
        //             <span>Symfony</span>
        //             <span>Apache</span>
        //             <span>Linux</span>
        //             <span>MySQL</span>
        //             <span>PostgreSQL</span>
        //             <span>AI & Machine Learning</span>
        //         </span>
        //         </div>
        //         <div className="languages">
        //             <span className="rainbow-color">3 human</span>
        //             <p className="bold">languages</p>
        //             <span className="lang">Khmer</span>
        //             <span className="lang">French</span>
        //             <span className="lang">English</span>
        //         </div>
        //     </section>
        //     <section className="quote">
        //         <p>“Rien n'est à craindre, tout est à comprendre!”</p>
        //         <a href={RandomImage}>random image </a>
        //     </section>
        //     <Link to="/my-portfolio/random-image">Random Image Generator</Link>
        //
        //     <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        //         <defs>
        //             <pattern id="b" patternUnits="userSpaceOnUse" width="25" height="25" viewBox="0 0 100 100"
        //                      fill="coral">
        //                 <circle cx="50" cy="50" r="12.5"></circle>
        //             </pattern>
        //         </defs>
        //         <path fill="url(#b)">
        //             <animate attributeName="d" dur="10s" repeatCount="indefinite"
        //                      values="
        //            M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
        //            M815,668Q694,836,472.5,883.5t-287-168Q120,500,233.5,367t279-154Q678,192,807,346t8,322Z;
        //            M838,662Q687,824,515.5,797t-290-162Q107,500,190,303.5t273.5-133Q654,234,821.5,367T838,662Z;
        //            M826.5,688.5Q717,877,514,852.5T177.5,664Q44,500,156,299.5T494,109q226,10,334,200.5t-1.5,379Z;
        //            M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
        //            M838,662Q687,824,515.5,797t-290-162Q107,500,190,303.5t273.5-133Q654,234,821.5,367T838,662Z;
        //            M856,707.5Q739,915,531.5,860t-363-207.5Q13,500,155,324t329-147.5q187,28.5,338,176t34,355Z;
        //            M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
        //            M839,665.5Q691,831,473,878T160.5,712.5Q66,500,178,318.5t297.5-139Q661,222,824,361t15,304.5Z;
        //            ">
        //
        //             </animate>
        //
        //         </path>
        //     </svg>
        //
        // </div>
    );
}

export default Home;