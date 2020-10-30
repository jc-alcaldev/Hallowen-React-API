import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const MyCard = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://images.pexels.com/photos/619419/pexels-photo-619419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			/>
			<Card.Body>
				<Card.Title>{props.attribute1}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="primary">{props.attribute2}</Button>
			</Card.Body>
		</Card>
	);
};

MyCard.propTypes = {
	attribute1: PropTypes.string,
	attribute2: PropTypes.string
};

{
	/* <Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="" />
			<Card.Body>
				<Card.Title>{props.attribute1}</Card.Title>
				<Card.Text />
				<Button variant="primary">{props.attribute2}</Button>
			</Card.Body>
		</Card> */
}
