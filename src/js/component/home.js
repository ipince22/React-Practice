import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

let arr = [
	{
		city: "AGAWAM",
		loc: [-72.622739, 42.070206],
		pop: 15338,
		state: "MA",
		_id: "01001",
		color: "danger"
	},
	{
		city: "CUSHMAN",
		loc: [-72.51564999999999, 42.377017],
		pop: 36963,
		state: "MA",
		_id: "01002",
		color: "warning"
	},
	{
		city: "BARRE",
		loc: [-72.10835400000001, 42.409698],
		pop: 4546,
		state: "MA",
		_id: "01005",
		color: "info"
	},
	{
		city: "BELCHERTOWN",
		loc: [-72.41095300000001, 42.275103],
		pop: 10579,
		state: "MA",
		_id: "01007",
		color: "success"
	},
	{
		city: "BLANDFORD",
		loc: [-72.936114, 42.182949],
		pop: 1240,
		state: "MA",
		_id: "01008",
		color: "primary"
	},
	{
		city: "BRIMFIELD",
		loc: [-72.188455, 42.116543],
		pop: 3706,
		state: "MA",
		_id: "01010",
		color: "secondary"
	}
];

//create your first component
export function Home() {
	const [list, setList] = useState(arr);
	const [header, setHeader] = useState("Testing the state of the component");

	return (
		<>
			<Navbar />
			<div className="text-center mt-5">
				<h1>{header}</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<div>
					<input onChange={e => setHeader(e.target.value)} />
				</div>
				<a
					href="#"
					className="btn btn-success"
					onMouseOver={() => {
						setList(
							list.concat({
								city: "BRIMFIELD",
								loc: [-72.188455, 42.116543],
								pop: 3706,
								state: "MA",
								_id: "01010",
								color: "primary"
							})
						);
						setHeader("THE HEADER HAS CHANGED");
					}}>
					Change the state
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
				<div className="d-flex justify-content-start">
					{list.map((item, index) => {
						return (
							<div className={"bg-" + item.color} key={index}>
								<div>{item.city}</div>
								<div>{item.state}</div>
								<div>{item._id}</div>
								<div>{item.pop}</div>
							</div>
						);
					})}

					<Card
						imgUrl="http://www.google.com"
						title="Google"
						buttonColor={""}
					/>
				</div>
			</div>
		</>
	);
}
