import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "../pages/home/Home";
import Sketch01Page from '../pages/Sketch01Page/Sketch01Page'
import Sketch02Page from "../pages/sketch02Page/Sketch02Page";


import './style.scss'
import SketchPageTemplate from "../pages/sketchPageTemplate/SketchPageTemplate";
import GeneratedSketch01Page from "../pages/GeneratedSketch01Page/GeneratedSketch01Page";
import MoverSandboxPage from "../pages/MoverSandboxPage/MoverSandboxPage";
import VectorSubtractionPage from "../pages/VectorSubtractionPage/VectorSubtractionPage";

function App() {
    return (

        <Router>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sketch-0">Sketch 1</Link>
                </li>
                <li>
                    <Link to="/sketch-2">Sketch 2</Link>
                </li>
                <li>
                    <Link to="/sketch-template">Sketch Template</Link>
                </li>
                <li>
                    <Link to="/generated-sketch-01">Generated Sketch 01</Link>
                </li>
                <li>
                    <Link to="/mover-sandbox">Mover Sandbox</Link>
                </li>
                <li>
                    <Link to="/vector-subtraction">Vector Subtraction</Link>
                </li>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="sketch-0/*" element={<Sketch01Page/>}/>
                <Route path="sketch-2/*" element={<Sketch02Page/>}/>
                <Route path="sketch-template/*" element={<SketchPageTemplate/>}/>
                <Route path="generated-sketch-01/*" element={<GeneratedSketch01Page/>}/>
                <Route path="mover-sandbox/*" element={<MoverSandboxPage/>}/>
                <Route path="vector-subtraction/*" element={<VectorSubtractionPage/>}/>
            </Routes>
        </Router>

            // <Sketch01Page />

    )
}


export default App;
