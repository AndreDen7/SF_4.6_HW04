import React from "react";
import { useLocation } from "react-router-dom";

function RecipeDetail() {

    const location = useLocation();

    return (
        <>
            <h2>
                {location.state.title}
            </h2>
            <hr />
            <p>
                {location.state.content}
            </p>
        </>
    );
}

export default RecipeDetail;