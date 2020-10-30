//import Iframe from "react-iframe";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/* demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
            ] */
			films: [
				{
					title: "OCULUS",
					release_date: "2014",
					cast: "Karen Gillan, Brenton Thwaites, Rory Cochrane, Katee Sackhoff",
					language: "English"
					/* video: (
						<Iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/grVqGQWEOpQ"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "SCREAM 2",
					release_date: "1997",
					cast: "Karen Gillan, Brenton Thwaites, Rory Cochrane, Katee Sackhoff",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/C-j2TLBmTBY"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "THE WITCH",
					release_date: "2016",
					cast: "Anya Taylor-Joy, Ralph Ineson, Kate Dickie, Harvey Scrimshaw",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/iQXmlf3Sefg"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "THE CABIN IN THE WOODS",
					release_date: "2012",
					cast: "Kristen Connolly, Chris Hemsworth, Anna Hutchison, Fran Kranz",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/NsIilFNNmkY"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "THE SILENCE OF THE LAMBS",
					release_date: "1991",
					cast: "Jodie Foster, Anthony Hopkins, Scott Glenn, Ted Levine",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/W6Mm8Sbe__o"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "HEREDITARY",
					release_date: "2018",
					cast: "Toni Collette, Milly Shapiro, Alex Wolff, Gabriel Byrne",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/V6wWKNij_1M"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				},
				{
					title: "THE INVISIBLE MAN",
					release_date: "2020",
					cast: "Elisabeth Moss, Aldis Hodge, Storm Reid, Harriet Dyer",
					language: "English"
					/* video: (
						<iframe
							width="560px"
							height="315px"
							src="https://www.youtube.com/embed/WO_FJdiY9dA"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) */
				}
			]
		},
		actions: {
			/* getfilms: () => {
				let fetch = [];
				fetch("http://35.176.81.233/movies/")
					.then(response => {
						if (!response.ok) {
							throw new Error("Sorry, this vehicle has been stolen");
						}
						return response.json();
					})
					.then(filmsJSON => {
						console.log(filmsJSON.results, "123456789876543234567654323456");
						getActions().setfilms(filmsJSON.results);
					})
					.catch();
			}, */
			/* setfilms: movies => {
				movies.map((films, index) => {
					getStore().films.push({
						model: films.model,
						name: films.name,
						passengers: films.passengers,
						cost_in_credits: films.cost_in_credits
					});
					console.log(getStore().films, "ooooooooorrrrrrr");
				});
			}, */

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
