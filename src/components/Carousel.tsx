import React from "react";
import {
    Carousel as RCarousel,

    CarouselControl,
    CarouselIndicators
} from "reactstrap";

export interface ICarouselProps {
  onNext?: Function;
  onPre?: Function;
  slides?: any;
  items? : any;
}

export interface ICarouselState {
  activeIndex: number;
  animating: boolean;
}

export class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  state = {
    activeIndex: 0,
    animating: false,
  };

  next = () => {
    const { activeIndex, animating } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === this.props.items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    this.props.onNext && this.props.onNext(nextIndex);
  };

  previous = () => {
    const { activeIndex, animating } = this.state;
    if (animating) return;
    const nextIndex = activeIndex === 0 ? this.props.items.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    this.props.onPre && this.props.onPre(nextIndex);
  };

  goToIndex = (newIndex: number) => {
    const { animating } = this.state;
    if (animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <RCarousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.props.items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {this.props.slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </RCarousel>
    );
  }
}
