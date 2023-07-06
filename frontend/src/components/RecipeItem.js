import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecipeItem(props) {

    const trimUrl = props.itemUrl.slice(0, -1);
    const recipeId = trimUrl.substring(trimUrl.lastIndexOf('/') + 1);
    const linkTo = `/recipe/${recipeId}`;

    const [recipe, setRecipe] = useState({
        loaded: false,
    });
    if (!recipe.loaded) {
        axios.get(`http://127.0.0.1:8000/recipes/${recipeId}`).then(res => {
            setRecipe({
                loaded: true,
                title: res.data.title,
                content: res.data.content,
            });
        });
    }

    return (
        <tr>
            <td>
                {recipe.loaded ? (
                    <Link to={linkTo} state={recipe}>{recipe.title}</Link>
                ) : (
                    ""
                )}
            </td>
        </tr>
    );
}

export default RecipeItem;