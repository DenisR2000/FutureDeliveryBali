import React, { Component } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FormControl, Navbar, Nav, Container, Form, Button, Col, Row, InputGroup, NavDropdown } from 'react-bootstrap';
import '../assets/styles/layouts/Header.css'
import LanguageComponent from '../components/forms/changeLangComponent';
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react';

const Header = () => {
    const { t } = useTranslation('data')
    return (
        <>
            <header>
                <Container className="mt-4 mb-4">
                    <Row>
                        <Col xs={2} md={2} lg={1} xl={1}>
                            <NavLink to="/">
                                <div className='logoWrapper'>
                                    <img className='logo' src="https://motor.ru/thumb/1280x720/filters:quality(75)/imgs/2020/09/07/14/4099186/52d8f45d1ae944564ab28538f5a79af4894c5106.jpg" alt="" />
                                </div>
                            </NavLink>
                        </Col>

                        <Col xl={2} className="d-none d-xl-block">
                            <NavLink to="/">
                                <div className='brandName'>B a l i E x p r e s s</div>
                            </NavLink>
                        </Col>

                        <Col lg={2} xl={1} className="d-none d-lg-block">
                            <div className='catalog'>
                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        Меню
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#action/1">Действие 1</Dropdown.Item>
                                        <Dropdown.Item href="#action/2">Действие 2</Dropdown.Item>
                                        <Dropdown.Item href="#action/3">Действие 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                <Button variant="outline-dark" className="d-flex align-items-center">
                                    <span className="mr-2">Каталог</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        width="16"
                                        height="16"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.66,10,7.47,3.8a.75.75,0,0,0-1.06,1.06L12.54,10,6.41,16.13a.75.75,0,0,0,1.06,1.06L13.66,10Z"
                                        ></path>
                                    </svg>
                                </Button>
                            </div>
                        </Col>

                        <Col xs={6} md={6} lg={7} xl={4}>
                            <div >
                                <Form inline>
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={9}>
                                                <FormControl type="text" placeholder="Я шукаю..." className="mr-sm-2" />
                                            </Col>

                                            <Col md={3} className="d-none d-md-block">
                                                <Button variant="dark">Пошук</Button>
                                            </Col>
                                        </Row>

                                    </Container>
                                </Form>
                            </div>
                        </Col>

                        <Col xl={2} className="d-none d-xl-block">

                            <div className='language'>
                                <LanguageComponent />
                            </div>

                        </Col>

                        <Col xs={2} md={2} lg={1} xl={1}>
                            <div className='iconWrapper'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                            </div>
                        </Col>

                        <Col xs={2} md={2} lg={1} xl={1}>
                            <NavLink to="cart">
                                <div className='iconWrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                    </svg>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </header>

            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )

}


export default Header