import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/App.css";

import Categories from "./Categories";
import CategoryDetail from "./CategoryDetail";
import RecipeDetail from "./RecipeDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/category/:id' element={<CategoryDetail/>} />
                <Route path='/recipe/:id' element={<RecipeDetail/>} />
                <Route path='/' element={<Categories/>} />
            </Routes>
        </Router>
    );
}

export default App;