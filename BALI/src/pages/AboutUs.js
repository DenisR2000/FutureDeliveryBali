import React, { Component } from 'react'
import { Tab, Container, Nav, Col, Row} from 'react-bootstrap'

export function AboutUs() {
    return (
        <div className='main__container'>
            <Container>
                <Tab.Container id="ledit-tabs-example" defaultActiveKey="first">
                    <Row className="mt-4">
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content style={{ textAlign: "center" }}>
                                <Tab.Pane eventKey="first">
                                    <img src="https://images.wallpaperscraft.ru/image/single/kakao_zefir_pled_118517_300x168.jpg" alt="" />
                                    {/* <p className="mt-2">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://images.wallpaperscraft.ru/image/single/kofe_kniga_ochki_140830_300x168.jpg" alt="" />
                                    <p className="mt-2">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://images.wallpaperscraft.ru/image/single/kofe_kapuchino_pena_108167_300x168.jpg" alt="" />
                                    <p className="mt-2">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://images.wallpaperscraft.ru/image/single/kofe_kniga_podokonnik_130911_300x168.jpg" alt="" />
                                    <p className="mt-2">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://images.wallpaperscraft.ru/image/single/shokolad_konfety_sladosti_106254_300x168.jpg" alt="" />
                                    <p className="mt-2">qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        {/* <Col sm={3}>
                            <Nav variant="pills" className="flex-column" mt-2>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Col sm={9}>
                                <Tab.Content >
                                    <Tab.Pane eventKey="first">
                                        <img src="https://images.wallpaperscraft.ru/image/single/kakao_zefir_pled_118517_300x168.jpg" alt="" />
                                        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <img src="https://images.wallpaperscraft.ru/image/single/kofe_kniga_ochki_140830_300x168.jpg" alt="" />
                                        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <img src="https://images.wallpaperscraft.ru/image/single/kofe_kapuchino_pena_108167_300x168.jpg" alt="" />
                                        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <img src="https://images.wallpaperscraft.ru/image/single/kofe_kniga_podokonnik_130911_300x168.jpg" alt="" />
                                        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <img src="https://images.wallpaperscraft.ru/image/single/shokolad_konfety_sladosti_106254_300x168.jpg" alt="" />
                                        <p>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Col> */}
                    </Row>
                </Tab.Container>
            </Container>



            {/* 
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={4}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="first">Tab 1</NavItem>
                            <NavItem eventKey="second">Tab 2</NavItem>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
                            <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>; */}

        </div>
    )
}
