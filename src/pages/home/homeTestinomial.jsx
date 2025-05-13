import React from "react";
import { Carousel } from "react-bootstrap";
import "./index.css";

const HomeTestinomial = () => {
  return (
    <div id="homeTestinomial" className="homeTestinomial">
      <div className="hometest-Title">Testimonials</div>
      <div className="hometest-descrp">
        See how others transformed their brands with on-demand fulfillment
      </div>

      <Carousel className="hometest-carousel mt-4">
        <Carousel.Item>
          <div className="testimonial-item text-center p-4">
            <p className="testimonial-text">
              "Amazing service! Helped us scale our operations smoothly."
            </p>
            <h5 className="testimonial-author">– Alex, Startup Co.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item text-center p-4">
            <p className="testimonial-text">
              "Efficient and reliable. Highly recommend!"
            </p>
            <h5 className="testimonial-author">– Maria, Retail Inc.</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item text-center p-4">
            <p className="testimonial-text">
              "Fulfillment made easy. We saved time and money."
            </p>
            <h5 className="testimonial-author">– John, EcomBiz</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestinomial;
