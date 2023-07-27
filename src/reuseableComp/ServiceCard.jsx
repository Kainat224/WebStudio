import React from "react";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ image }) => {
  return (
    <Card className="serviceCard">
      <Card.Img variant="top" src={image} />
    </Card>
  );
};

export default ServiceCard;
