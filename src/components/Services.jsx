import React from "react";
import img from "../images/img.svg";
import box2 from "../images/box 2.svg";
import box3 from "../images/box 3.svg";
import ServiceCard from "../reuseableComp/ServiceCard";

const Services = () => {
  return (
    <>
      <div className="container serviceSecStyle">
        <div className="row">
          <h1 className="text-center pb-4">Чем мы занимаемся</h1>
          <div className="col-lg-4 col-12 col-md-6 my-2 text-center">
            <ServiceCard image={img} />
          </div>
          <div className="col-lg-4 col-12 col-md-6 my-2 text-center">
            <ServiceCard image={box2} />
          </div>
          <div className="col-lg-4 col-12 col-md-6 my-2 text-center">
            <ServiceCard image={box3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
