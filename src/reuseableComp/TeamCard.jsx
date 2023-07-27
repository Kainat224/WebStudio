import React from "react";
import Card from "react-bootstrap/Card";

const TeamCard = ({ image, title, text }) => {
  return (
    <>
      <Card className="teamStyle">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default TeamCard;
