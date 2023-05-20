import "./banner.scss";
import Typical from "react-typical";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/bannerSliderImages/sliderImg1.avif";
import slider2 from "../../assets/bannerSliderImages/sliderImg2.avif";
import slider3 from "../../assets/bannerSliderImages/sliderImg3.avif";
import { useState } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="banner" id="hero">
      <div className="banner__container">
        <div className="banner__left">
          <h1>
            The premium
            <Typical
              loop={Infinity}
              steps={["Houses for Rent ", 2500, "Houses for Sale", 3000]}
            />
          </h1>
        </div>

        <div className="banner__right">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={slider1} alt="First slide" />
              <Carousel.Caption>
                <h3 style={{ color: "white" }}>Buy It | Rent It | Love It</h3>
                <p style={{ color: "white" }}>
                  {" "}
                  Promise for quality homes with us..
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slider2} alt="Second slide" />

              <Carousel.Caption>
                <h3 >Find Your Dream Home with us</h3>
                <p>
                  Don't look at the price, a home is about what you make of it!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slider3} alt="Second slide" />

              <Carousel.Caption>
                <h3 style={{ color: "white" }}>Choose a signature property</h3>
                <p style={{ color: "white" }}>
                  An investment that will grow over time.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
