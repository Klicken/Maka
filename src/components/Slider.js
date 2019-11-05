import React from "react";
import { makeStyles } from "@material-ui/core";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dolan from "../resources/dolan.png";
import business from "../resources/business.png";
import simplepark from "../resources/simplepark.png";
import scheduler from "../resources/scheduler.png";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", textShadow: "0px 1px 1px #757575" }}
      onClick={onClick}
    />
  );
}

const sliderSettings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 200,
  slidesToShow: 3,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        centerPadding: "30px",
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerPadding: 0,
        dots: false
      }
    }
  ]
};

const useStyles = makeStyles({
  wrapper: {
    height: "100%",
    paddingBottom: "30px",
    paddingLeft: "30px",
    paddingRight: "30px"
  }
});

export default function SimpleSlider() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Slider {...sliderSettings}>
        <SliderItem
          image={business}
          title="Digital Business Cards"
          desc="App for sharing digital business cards"
          tech="React Native, JavaScript, Firebase"
        />
        <SliderItem
          image={simplepark}
          title="SimplePark"
          desc="Parking App that finds the closest, cheapest and available parking spot in Gothenburg"
          tech="Java, Android, OpenStreetMap"
        />
        <SliderItem
          image={scheduler}
          title="Scheduler"
          desc="Scheduling Web App for groups and organizations"
          tech="React, Redux, JavaScript"
        />
        <SliderItem
          image={dolan}
          title="Dolan: The Disco Duckfish"
          desc="Top-down arena shooter"
          tech="Java, JavaFx"
        />
      </Slider>
    </div>
  );
}
