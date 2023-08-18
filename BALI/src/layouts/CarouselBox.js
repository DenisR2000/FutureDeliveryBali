import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselBox extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src="https://www.meyerspartners.com/wp-content/uploads/hero-graphics-cmyk-rgb-1200x400.jpg"
                            alt="Mountain"
                        />
                        <Carousel.Caption>
                            <h3>Первое</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src="https://d368g9lw5ileu7.cloudfront.net/races/races-141xxx/141458/raceBanner-KhC3X2Jo-bJYQAv.jpg"
                            alt="Mountain"
                        />
                        <Carousel.Caption>
                            <h3>Второе</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b8e2af3a-d4c3-4d77-88e8-5d63e60cb911/d865j5u-84dce173-cbe6-4157-92d2-23c2b8016c34.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4ZTJhZjNhLWQ0YzMtNGQ3Ny04OGU4LTVkNjNlNjBjYjkxMVwvZDg2NWo1dS04NGRjZTE3My1jYmU2LTQxNTctOTJkMi0yM2MyYjgwMTZjMzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8j5BYMS-FHno7VKcf7x7O-iO_SUkfgopshWeItvF9QE"
                            alt="Mountain"
                        />
                        <Carousel.Caption>
                            <h3>Второе</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={ThirMountImg}
                            alt="Mountain"
                        />
                        <Carousel.Caption>
                            <h3>ThirMountImg</h3>
                            <p>Description of item</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={FourMountImg}
                            alt="Mountain"
                        />
                        <Carousel.Caption>
                            <h3>FourMountImg</h3>
                            <p>Description of item</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>

            </>
        )
    }
}
