import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardPlanet = (props) => {
    
    const { store, dispatch } = useGlobalReducer()
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src='https://i.blogs.es/918e48/star-wars-tierra/1366_2000.jpeg' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Info planet.</p>
                <Link to={'/planet/' + props.uid} className="btn btn-primary me-2">Learn more {props.uid}</Link>
                <button className={`btn ${store.planetsFav.includes(props.name) ? 'btn-primary' : 'btn-outline-primary'}`}
                 onClick={()=>{
                    dispatch({
                        type:'toggle_fav_planets',
                        payload:{namePlanet: props.name }
                    })
                 }}>♥</button>
            </div>
        </div>

    );
}