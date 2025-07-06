
import { Link, useParams } from "react-router-dom";  
import PropTypes from "prop-types";  
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  
import useGlobalReducer from "../hooks/useGlobalReducer";  
import { useEffect, useState } from "react";


export const Nave = props => {
  
  const { store } = useGlobalReducer()

  const [nave, setNave]=useState({})
  const { naveId } = useParams()


useEffect(()=>{
    fetch('https://www.swapi.tech/api/starships/'+naveId)
    .then((response)=>response.json())
    .then((data)=> setNave(data.result.properties))
},[])


  return (
    <div className="container text-center font-monospace">
    
      <h1 className="display-4">Nave: {naveId}</h1>
      <hr className="my-4" />  
      <p>Name:{nave.name}</p>
      <p>Model:{nave.model}</p>
      <p>Manufacturer:{nave.manufacturer}</p>
   
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


Nave.propTypes = {
  
  match: PropTypes.object
};
