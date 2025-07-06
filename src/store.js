export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    naves: [],
    texto: 'texto inicial',
    navesFav: [],
    planets: [],
    planetsFav: [],
    peoples:[],
    peoplesFav:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
   
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'change_text':
      const { newText } = action.payload
      return {
        ...store,
        texto: newText
      };

    case 'load_ships':
      return {
        ...store,
        naves: action.payload
      };

      case 'load_planet':
      return {
        ...store,
        planets: action.payload
      };

      
      case 'load_people':
      return {
        ...store,
        peoples: action.payload
      };

    case 'toggle_fav_ship':
      const { nameShip } = action.payload
      let updatednaves = []
      if (store.navesFav.includes(nameShip)) {
        console.log('quitar elemento')
        updatednaves = store.navesFav.filter((nave) => nave != nameShip)
      } else {
        console.log('agregar elemento')
        updatednaves = [...store.navesFav, nameShip]
      }
      return {
        ...store,
        navesFav: updatednaves
      };

       case 'toggle_fav_planets':
      const { namePlanet } = action.payload
      let updatedPlanets = []
      if (store.planetsFav.includes(namePlanet)) {
        console.log('quitar elemento')
        updatedPlanets = store.planetsFav.filter((planet) => planet !== namePlanet)
      } else {
        console.log('agregar elemento')
        updatedPlanets = [...store.planetsFav, namePlanet]
      }
      return {
        ...store,
        planetsFav: updatedPlanets
      };
      
       case 'toggle_fav_peoples':
      const { namePeople } = action.payload
      let updatedPeoples = []
      if (store.peoplesFav.includes(namePeople)) {
        console.log('quitar elemento')
        updatedPeoples = store.peoplesFav.filter((people) => people !== namePeople)
      } else {
        console.log('agregar elemento')
        updatedPeoples = [...store.peoplesFav, namePeople]
      }
      return {
        ...store,
        peoplesFav: updatedPeoples
      };

    default:
      throw Error('Unknown action.');
  }
}
