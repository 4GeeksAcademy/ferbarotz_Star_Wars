import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardPeople = (props) => {
    
    const { store, dispatch } = useGlobalReducer()
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkT5NshpQuYv3irInLepPcLGUTwuqXt3jNg&s' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Info planet.</p>
                <Link to={'/people/' + props.uid} className="btn btn-primary me-2">Learn more {props.uid}</Link>
                <button className={`btn ${store.peoplesFav.includes(props.name) ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={()=>{
                    dispatch({
                        type:'toggle_fav_peoples',
                        payload:{namePeople: props.name }
                    })
                }}>♥</button>
            </div>
        </div>

    );
}