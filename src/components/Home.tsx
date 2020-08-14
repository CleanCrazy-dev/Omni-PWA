import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";
import { CarouselCaption, CarouselItem, Col, Row } from "reactstrap";
import { UserModel } from "../models/UserModel";
import { Carousel } from "./Carousel";
import { SideCarousel } from "./docs";

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
}

class HomeImpl extends React.Component<IHomeProps, {}> {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    new UserModel(res.data).$saveAll();
  }

  slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => this.setState({ animating: true })}
        onExited={() => this.setState({ animating: false })}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  render() {
    return (
      <div>
        <Carousel items={items} slides={this.slides} />
        <SideCarousel />
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h1>Malhar Collection Rhythm of life!</h1>
            <div>
              Spread the joy with our celebratory wardrobe with splashes of
              colour, natural hues and gentle handcrafted motifs and patterns.
              Discover beautiful hand-woven fabrics perfect for the festivities
              around the corner. Take a look at these curated looks we put
              together just for you!
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="image">
              <img
                alt=" col-1"
                width="100%"
                src="https://www.fabindia.com/file/general/look-front-30-07.jpg"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="image">
              <img
                alt=" col-1"
                width="100%"
                src="https://www.fabindia.com/file/general/look-front-30-07.jpg"
              />
            </div>
          </Col>{" "}
          <Col xs={12} md={6} lg={6}>
            <h1> The Home Edition!</h1>
            <div>
              It's good to be home Home is a place for Love and happiness. Make
              it a beautiful space with our home furnishings. Experiment with
              soothing pastels and contrasting accents to make it your own. Sit
              back &amp; relax. Get those creative juices flowing..It's time for
              some TLC. #WFM #InThisTogether
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = () => ({ users: UserModel.list() });

export const Home = connect(mapStateToProps)(HomeImpl);
