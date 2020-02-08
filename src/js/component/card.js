import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card mx-2 backgr" style={{ width: "300px" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card
					{"'"}s content.
				</p>
				<a href={props.link} className={"btn btn-" + props.buttonColor}>
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	buttonColor: PropTypes.string
};
