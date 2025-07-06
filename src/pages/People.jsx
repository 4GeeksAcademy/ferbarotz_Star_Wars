
import { Link, useParams } from "react-router-dom";  
import PropTypes from "prop-types";  
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  
import useGlobalReducer from "../hooks/useGlobalReducer";  
import { useEffect, useState } from "react";


export const People = props => {
  
  const { store } = useGlobalReducer()

 
  const [people, setPeople]=useState({})
  const { peopleId } = useParams()  

useEffect(()=>{
    fetch('https://www.swapi.tech/api/people/'+ peopleId)
    .then((response)=>response.json())
    .then((data)=> setPeople(data.result.properties))
},[])


  return (
    <div className="container text-center font-monospace">
    
      <h1 className="display-4">People: {peopleId}</h1>
      <hr className="my-4" />  
      <p>Name:{people.name}</p>
      <p>Gender:{people.gender}</p>
      <p>Birth_year:{people.birth_year}</p>
   
      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};


People.propTypes = {
  
  match: PropTypes.object
};
