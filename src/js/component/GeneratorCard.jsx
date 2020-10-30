import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { MyCard } from "./Card.jsx";

export const GeneratorCard = () => {
	const { store, actions } = useContext(Context);

	console.log(store.films, "en planets");

	return (
		<div>
			<MyCard attribute1={store.films[0].title} attribute2={store.films[0].release_date} />
			{/* <button onClick={() => console.log(store.planets[1].name, "en button")}>{store.planets[1].name}</button> */}
		</div>
	);
};
