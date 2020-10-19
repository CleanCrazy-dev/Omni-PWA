import * as React from "react";
// import { Carousel } from "../Carousel";
import Slider from "react-slick";
import "./carousel.scss";
import { isMobile, isIPad } from "../../generalUtils";
import arrow from "../../resource/img/arrow.svg";
import { Link } from "react-router-dom";
export class SideCarousel extends React.Component<{
  onClickSlide: () => void;
  slideImages: any[];
}> {
  promoSliderRef: any;

  state = {
    activeSlide: 1,
  };

  carRef1: any = React.createRef();
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  render() {
    var settings = {
       infinite: true,
      speed: 500,
      slidesToShow: isIPad() ? 2 : isMobile() ? 2 : 3,
      slidesToScroll: 1,
      dots: isMobile() && true,
    };
    const { slideImages } = this.props;
    return (
      <div className="Side-Carousel">
        {/* {!isMobile() && ( */}
        <>
          <div className="Controls">
            <div
              onClick={() => {
                this.setState({
                  activeSlide:
                    this.state.activeSlide === 1
                      ? 8
                      : this.state.activeSlide - 1,
                });
                this.carRef1.current.slickPrev();
              }}
            >
            <img style={{height:"45px",transform: "rotate(180deg)"}} src={arrow} alt="" />
            </div>
            <div style={{minWidth: '50px',}}> {this.state.activeSlide} / 8</div>
            <div
              onClick={() => {
                this.setState({
                  activeSlide:
                    this.state.activeSlide === 8
                      ? 1
                      : this.state.activeSlide + 1,
                });
                this.carRef1.current.slickNext();
              }}
            >
             <img style={{height:"45px"}} src={arrow} alt="" />
            </div>
          </div>
          <div className="fab-featured-wrapper">
            <div className="fab-featured">
              <h2>
                <span>Featured</span>
                <div className="f_products">Products</div>
              </h2>
            </div>
          </div>
       </>
        {/* )}  */}
        
        <div className="Carousel-Items">
          <Slider 
            // ref={(ref) => (this.promoSliderRef = ref)} 
            ref={this.carRef1}
            {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
              return (
                <div className="SlideImage" onClick={this.props.onClickSlide}>
                  <div>
                    <img
                      width=""
                      height=""
                      src={slideImages[i]}
                      alt=""
                      key={x}
                      className="SideImage"
                    />
                    <div className="sub_tit">Gifting Ideas</div>
                  </div>
                  <div className="MiniSlideContent">
                    <span>Experience the</span>
                    <span className="h1-text">Joy of Gifting</span>
                  </div>
                  {/* <div className="MiniSlideBottom">
                      <Link to="/">
                          <span>Everyday Routine</span>
                          <span className="arrow_align ">Self Care</span>
                      </Link>
                  </div> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
