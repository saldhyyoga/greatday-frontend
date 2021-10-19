
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import './style.css';

const Example = (props) => {
  return (
    <div className="card-container">
      <Card>
        <CardImg style={{width: 300, height: 120, display: 'flex', flexDirection: 'row'}} src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>{props.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;