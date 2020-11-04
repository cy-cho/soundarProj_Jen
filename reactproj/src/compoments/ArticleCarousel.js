import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ArticleCarousel(props) {
  return (
    <>
      {/* <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade" 
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item carousel-img active">
            <img src="http://localhost:3000/img/article02.jpg" className="d-block"  alt="..." />
          </div>
          <div className="carousel-item carousel-img">
            <img src="http://localhost:3000/img/article08.jpg" className="d-block" alt="..." />
          </div>
          <div className="carousel-item carousel-img">
            <img src="http://localhost:3000/img/banner.jpg" className="d-block" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      <Carousel prevIcon={false} nextIcon={false} >
        <Carousel.Item interval={2000} fade={true} slide={true}>
          <div className="carousel-img">
          <img
            className="d-block"
            src="http://localhost:3000/img/article02.jpg"
            alt="First slide"
          /></div>
          <Carousel.Caption>
            <h3>Podcast新手入門：為什麼要聽、用什麼聽，以及有哪些好節目</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} fade={true} slide={true}>
           <div className="carousel-img">
          <img
            className="d-block"
            src="http://localhost:3000/img/article08.jpg"
            alt="Third slide"
          /></div>
          <Carousel.Caption>
            <h3>為何唱片公司要投入 Podcast？Sony 的內容策略？</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
           <div className="carousel-img">
          <img
            className="d-block w-100"
            src="http://localhost:3000/img/banner.jpg"
            alt="Third slide"
          /></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  )
}

export default ArticleCarousel
