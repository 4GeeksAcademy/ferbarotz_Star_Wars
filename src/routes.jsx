import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Nave } from "./pages/Nave";
import { Planet } from "./pages/Planet";
import { People } from "./pages/People";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

      <Route path="/nave/:naveId" element={<Nave />} />
      <Route path="/planet/:planetId" element={<Planet />} />
      <Route path="/people/:peopleId" element={<People />} />

      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);