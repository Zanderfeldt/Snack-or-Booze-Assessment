import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu(props) {
  let url;
  let items;

  //depending on whether this component is displaying foods or drinks,
  //make sure url links reflect that
  if (props.snacks) {
    url = '/snacks/';
    items = props.snacks;
  } else if (props.drinks) {
    url = '/drinks/';
    items = props.drinks;
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(i => (
              <Link to={`${url}${i.id}`} key={i.id}>
                <ListGroupItem>{i.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
