
import { Link, useParams } from "react-router-dom";  
import PropTypes from "prop-types";  
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  
import useGlobalReducer from "../hooks/useGlobalReducer";  
import { useEffect, useState } from "react";


export const Planet = props => {
  
  const { store } = useGlobalReducer()

 
  const [planet, setPlanet]=useState({})
  const { planetId } = useParams()  


useEffect(()=>{
    fetch('https://www.swapi.tech/api/planets/'+planetId)
    .then((response)=>response.json())
    .then((data)=> setPlanet(data.result.properties))
},[])


  return (
    <div className="container text-center font-monospace">
    
      <h1 className="display-4">Planet: {planetId}</h1>
      <hr className="my-4" />  
      <p>Name:{planet.name}</p>
      <p>Terrain:{planet.terrain}</p>
      <p>Population:{planet.population}</p>
   
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


Planet.propTypes = {
  
  match: PropTypes.object
};
