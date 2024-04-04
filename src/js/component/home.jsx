import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


import rigoImage from "../../img/rigo-baby.jpg";
import { array } from "prop-types";


const Home = () => {
    let data = [
        { title: "4geeks academy", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Latam pt29", description: "Another quick example text to build on the card title and make up the bulk of the card's content." },
        { title: "Github", description: "And another  quick example text to build on the card title and make up the bulk of the card's content" },
		{ title: "Landing page", description: "Last but not least another example text to build and make up the bulk of the card's content." }
    ];
	return (
		<>
			<Navbar />
			<div class="container">
				<Jumbotron />
			</div>
			<br/>
			<div className="container">
				<div className="row justify-content-center text-center">
					{data.map((value, index, array) => {
						return<Card title={value.title} description={value.description} />
					})}
				</div>
			</div>
			<br/>
			<div>
			<Footer />
			</div>
		</>
	)
}

export default Home;
