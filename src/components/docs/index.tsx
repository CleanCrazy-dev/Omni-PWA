import * as React from "react";
// import { Carousel } from "../Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import { isMobile } from "../../generalUtils";
export class SideCarousel extends React.Component<{
  onClickSlide: () => void;
  slideImages: any[];
}> {
  state = {
    activeSlide: 1,
  };

  carRef1: any = React.createRef();
  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  render() {
    var settings = {
      dots: isMobile() && true,
      infinite: true,
      speed: 500,
      slidesToShow: isMobile() ? 1 : 3,
      slidesToScroll: 1,
    };
    const { slideImages } = this.props;
    return (
      <div className="Side-Carousel">
        {!isMobile() && (
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
              <i className="fa font-50 fa-arrow-circle-left"></i>
            </div>
            <div className="SlideNumber"> {this.state.activeSlide} / 8</div>
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
              <i className="fa font-50 fa-arrow-circle-right"></i>
            </div>
          </div>
        )}
        <div className="Carousel-Items">
          <Slider ref={this.carRef1} {...settings}>
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
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
