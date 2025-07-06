
import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardNave } from "../components/CardNave.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardPeople } from "../components/CardPeople.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/starships')
		.then((response)=>response.json())
		.then((data)=>{
				dispatch({
				type: 'load_ships',
				payload: data.results
			})
		})
	},[])

		useEffect(()=>{
		fetch('https://www.swapi.tech/api/planets/')
		.then((response)=>response.json())
		.then((data)=>{
				dispatch({
				type: 'load_planet',
				payload: data.results
			})
		})
	},[])

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/people/')
		.then((response)=>response.json())
		.then((data)=>{
				dispatch({
				type: 'load_people',
				payload: data.results
			})
		})
	},[])

	return (
		<>
		<div className="text-center mt-5">
			
			<h1>NAVES </h1>
			<div className="row flex-row flex-nowrap overflow-scroll font-monospace ">
			{store.naves.map((nave)=> <CardNave key={nave.uid} uid={nave.uid} name={nave.name}/>)}	
			</div>
			
			<h1>PLANETAS </h1>
			<div className="row flex-row flex-nowrap overflow-scroll font-monospace ">
			{store.planets.map((planet)=> <CardPlanet key={planet.uid} uid={planet.uid} name={planet.name}/>)}
			</div>

			<h1>PERSONAJES </h1>
			<div className="row flex-row flex-nowrap overflow-scroll font-monospace ">
			{store.peoples.map((people)=> <CardPeople key={people.uid} uid={people.uid} name={people.name}/>)}
			</div>
			
		</div>
		</>

	);
}; 





