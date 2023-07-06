import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {

    const trimUrl = props.item.url.slice(0, -1);
    const catId = trimUrl.substring(trimUrl.lastIndexOf('/') + 1);
    const linkTo = `/category/${catId}`;

    return (
        <tr>
            <td>
                <Link to={linkTo} state={ props.item }>{props.item.name}</Link>
            </td>
        </tr>
    );
}

export default CategoryItem;