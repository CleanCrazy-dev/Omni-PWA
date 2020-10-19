import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import tdImg1 from "../resource/img/t1.jpg";
import tdImg2 from "../resource/img/t2.jpg";
import tdImg3 from "../resource/img/t3.jpg";
import Slider from "react-slick";
import { CarouselItem, Col, Row } from "reactstrap";
import { isIPad, isMobile } from "../generalUtils";
import { IHistory } from "../interfaces";
import { UserModel } from "../models/UserModel";
import img1 from "../resource/img/1.jpg";
import img2 from "../resource/img/2.jpg";
import img3 from "../resource/img/3.jpg";
import slideImg1 from "../resource/img/f1.jpg";
import slideImg2 from "../resource/img/f2.jpg";
import slideImg3 from "../resource/img/f3.jpg";
import p1 from "../resource/img/p1.jpg";
import p2 from "../resource/img/p2.jpg";
import p3 from "../resource/img/p3.jpg";
import arrow from "../resource/img/arrow.svg";
import { SignUpPage } from "./AccountPage/SignUpPage";
import { Carousel } from "./Carousel";
import { SideCarousel } from "./docs";
import "./home.scss";
import { Link } from "react-router-dom";
const items = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

export interface IHomeProps {
  users: UserModel[];
  history: IHistory;
}

class HomeImpl extends React.Component<IHomeProps, {}> {
  promoSliderRef: any;

  state = {
    activeSlide: 1,
    activeBagruSlide: 1
  };

  carRef1: any = React.createRef();
  slides = [1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
    const imgs = [img1, img2, img3, img1, img2, img3, img1, img2, img3];
    return (
      <CarouselItem
        onExiting={() => this.setState({ animating: true })}
        onExited={() => this.setState({ animating: false })}
        key={x}
      >
        <div className="">
          <img
            width="100%"
            className="HomeSlideImage"
            height=""
            src={imgs[i]}
            alt=""
            key={x}
          />
        </div>{" "}
      </CarouselItem>
    );
  });

  

  render() {
    console.log("isIpad", isIPad(), "ismobile",isMobile())
    console.log("this.state.activeBagruSlide", this.state.activeBagruSlide)
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    var settingsForPromo = {
      infinite: true,
      speed: 500,
      slidesToShow: isIPad() ? 1 : isMobile() ? 1 : 3,
      slidesToScroll: 1    
    };
    const tImages = [
      tdImg1,
      tdImg2,
      tdImg3,
      tdImg1,
      tdImg2,
      tdImg3,
      tdImg1,
      tdImg2,
      tdImg3,
    ];

    return (
      <div>
        {/* <SignUpPage /> */}
        {/* {isMobile() && (
          <div className="SearchInp">
            {" "}
            <input
              className="SearchInput"
              onChange={(e) => console.log("value",e.target.value)}
              placeholder="Enter your search text here..."
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        )} */}
        <div className="CarouselContainer">
          <Carousel items={items} slides={this.slides} />
        </div>
        {/* <div className="fab-featured">
          <h2>
            <span>Featured</span>
            <div className="f_products">Products</div>
          </h2>
        </div> */}
        <SideCarousel
          slideImages={[
            slideImg1,
            slideImg2,
            slideImg3,
            slideImg1,
            slideImg2,
            slideImg3,
            slideImg1,
            slideImg2,
            slideImg3,
          ]}
          onClickSlide={() => this.props.history.push("/product-list")}
        />
        <Row className="bg-wheat home-row">
          <Col xs={12} md={6} lg={6} className="flex j-center fd-col">
            <div className="Hometext">
              <h1>Malhar Collection</h1>
              <span> Rhythm of life!</span>
            </div>
            <div className="HomeParagraph">
              Spread the joy with our celebratory wardrobe with splashes of
              colour, natural hues and gentle handcrafted motifs and patterns.
              Discover beautiful hand-woven fabrics perfect for the festivities
              around the corner. Take a look at these curated looks we put
              together just for you!
            </div>
            <div className="btn_desc">
                <Link to="/">
                    Explore
                </Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="image">
              <img
                className="home-img"
                alt="col-1"
                width="80%"
                src="https://www.fabindia.com/file/general/look-front-30-07.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row className="home-row">
          <Col xs={12} md={6} lg={6}>
            <div className="image">
              <img
                className="home-img"
                alt=" col-1"
                width="100%"
                src="https://www.fabindia.com/file/general/look-front-30-07.jpg"
              />
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={6} className="flex j-center fd-col">
            <div className="Hometext">
              <h1> The Home Edition!</h1>
              <span>It's good to be home</span>
            </div>
            <div className="HomeParagraph">
              It's good to be home Home is a place for Love and happiness. Make
              it a beautiful space with our home furnishings. Experiment with
              soothing pastels and contrasting accents to make it your own. Sit
              back &amp; relax. Get those creative juices flowing..It's time for
              some TLC. #WFM #InThisTogether
            </div>
            <div className="btn_desc d-none d-md-block">
                <Link to="/">
                    Explore
                </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12} md={12}>
            <div className="promo-featured">
              <h2>
                <span>Promo Previews</span>
                <div className="promo-text">
                  A glimpse at all things new at Fabindia
                </div>
              </h2>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <Row className="MobileBlock hidden-ipad">
              <Col lg={8} md={8}>
                <img alt="" src={p1} width="100%" />
                <div className="VideoText">
                  <h4>Malhar Collection</h4>
                  <span>
                    {" "}
                    The rhythm of life, the wonder of colours , the passion of...
                    {/* nature, all embodied in our new Malhar collection! */}
                    <img style={{height:"45px", marginTop: '-10px', float: 'right', color: '#000'}}
                    src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-c8OALsaw-6erbEldBt0wW848SN4DG8j2nQ&usqp=CAU"}
                    ></img>
                  </span>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div>
                  <img alt="" src={p2} width="100%" />
                  <div className="VideoText" style={{padding: '12px'}}>
                    <h4>Chikankari Collection</h4>
                    <span>
                      Chikankari is the fine and intricate enbroidery ...
                    </span>
                  </div>
                </div>
                <div>
                  <img alt="" src={p3} width="100%" />
                  <div className="VideoText" style={{padding: '12px'}}>
                    <h4>Rajwada Collection</h4>
                    <span>
                      Let the festivities begin with Rajwada: All...
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="MobilePromoSlider visible-ipad">
          <Col xs={12} md={9} lg={10} className="SliderCol">
            <Slider
              {...settingsForPromo}
              ref={(ref) => (this.promoSliderRef = ref)}
            >
              {[1, 2, 3].map((x, i) => {
                const photos = [p1, p2, p3, p1];
                const descObj = [
                  {
                    text: "Malhar Collection",
                    desc:
                      "The rhythm of life, the wonder of colours, the passion of nature",
                  },
                  {
                    text: "Chikankari Collection",
                    desc: "Chikankari is the fine and intricate embroidery tr",
                  },
                  {
                    text: "Rajwada Collection",
                    desc:
                      "Let the festivities begin with Rajwada: All that is opulen          ",
                  },
                  {
                    text: "Malhar Collection",
                    desc:
                      "The rhythm of life, the wonder of colours, the passion of nature, all embodied in our new Malhar collection!",
                  },
                ];

                return (
                  <div key={i} className="PromoSlideImage">
                    <img src={photos[i]} alt="" className="SlideImagePromo" />
                    <div className="VideoText">
                      <h4>{descObj[i].text}</h4>
                      <span>{descObj[i].desc} </span>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="PromoControls ">
              <button
                className="PromoButton"
                onClick={() => {
                  this.setState({
                    activeSlide:
                      this.state.activeSlide === 1
                        ? 3
                        : this.state.activeSlide - 1,
                  });
                  this.promoSliderRef.slickPrev();
                }}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                Previous
              </button>
              <div className="SlideNumber">{this.state.activeSlide} / 3 </div>
              <button
                className="PromoButton"
                onClick={() => {
                  this.setState({
                    activeSlide:
                      this.state.activeSlide === 3
                        ? 1
                        : this.state.activeSlide + 1,
                  });
                  this.promoSliderRef.slickNext();
                }}
              >
                Next<i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </Col>
        </Row>
        <Row >
          <Col xs={12} md={12} lg={12} style={{display: 'flex'}}>
            <div className="traditionalTitle">
              <h2>
                <span>Traditional Crafts</span>
                <div className="traditional-product">
                  Take a quick peek into all things Fabindia
                </div>
              </h2>
            </div>
            {/* <div className="MobilePromoSlider visible-ipad"> */}
            <span className="Controls" style={{marginTop: '-10px'}}>
              <div
                onClick={() => {
                  this.setState({
                    activeBagruSlide:
                      this.state.activeBagruSlide === 1
                        ? 8
                        : this.state.activeBagruSlide - 1,
                  });
                  this.carRef1.current.slickPrev();
                }}
              >
              <img style={{height:"42px",transform: "rotate(180deg)"}} src={arrow} alt="" />
              </div>
              <div style={{minWidth: '40px'}}> {this.state.activeBagruSlide} / 8</div>
              <div
                onClick={() => {
                  this.setState({
                    activeBagruSlide:
                      this.state.activeBagruSlide === 8
                        ? 1
                        : this.state.activeBagruSlide + 1,
                  });
                  this.carRef1.current.slickNext();
                }}
              >
              <img style={{height:"42px"}} src={arrow} alt="" />
              </div>
            </span>
            {/* </div> */}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Slider 
              ref={this.carRef1}
              {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((x, i) => {
                console.log("x = ", x, "i = ", i)
                console.log(this.state.activeBagruSlide == i ? "mb-20" : "TradTe")
                return (
                  <div key={i} className="TradCarouselSlide" >
                    {/* {this.state.activeBagruSlide === 3 ?
                      <div className="mb-20">
                    <img src={tImages[i]} alt="" className="SlideImageTrad" />
                    <div className="TradText">
                      <span>Bagru Print</span>
                      <p>The art of traditional hand block printingƒ</p>
                    </div>
                    </div>
                    :
                    <div>
                    <img src={tImages[i]} alt="" className="SlideImageTrad" />
                    <div className="TradText">
                      <span>Bagru Print</span>
                      <p>The art of traditional hand block printingƒ</p>
                    </div>
                    </div>} */}
                    <div  style={{padding: this.state.activeBagruSlide === i ? "0px" : "15px"}} >
                      <img alt="" src={tImages[i]} width="100%" />
                      <div className="VideoText" >
                        <h4>Bagru Print</h4>
                        <span>
                        The art of traditional hand 
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
        <Row className="HomeBottom" >
          <Col xs={12} md={12} lg={8} className="flex j-center fd-col HomeSignup">
            <h2>Be the First to know!</h2>
            <p>
              Join our mailing list for exclusive access to the latest fashion
              trends, tips, and more.
            </p>
            <div className="SignupInput">
              <div className="Inner">
                <input className="SearchInput" placeholder="Enter email here" />
                <button className="SingupButton">Sign Me Up!</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = () => ({ users: UserModel.list() });

export const Home = withRouter(connect(mapStateToProps)(HomeImpl));
