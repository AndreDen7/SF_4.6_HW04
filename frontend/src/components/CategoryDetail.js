import axios from "axios";
import React, { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { useLocation, useParams } from "react-router-dom";
import RecipeItem from "./RecipeItem";

function CategoryDetail() {

    const params = useParams();
    const location = useLocation();

    const [recipes, setRecipes] = useState([]);
    if (!recipes.length) {
        axios.get(`http://127.0.0.1:8000/categories/${params.id}`).then(res => {
            setRecipes(res.data.recipes);
        });
    }

    return (
        <>
            <h2>
                {location.state.name}
            </h2>
            <hr />
            <Table striped bordered hover className="recipes">
                <thead>
                    <tr>
                        <th>Recipe name</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map(recipe =>
                        <RecipeItem key={recipe} itemUrl={recipe} />
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default CategoryDetail;