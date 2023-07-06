import React, { useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";

import Table from 'react-bootstrap/Table';

import "../styles/Categories.css";

function Categories() {

    const [categories, setCategories] = useState([]);
    if (!categories.length) {
        axios.get("http://127.0.0.1:8000/categories/").then(res => {
            setCategories(res.data);
        });
    }

    return (
        <>
            <a className="api-link" href="http://127.0.0.1:8000/swagger-ui/">API here</a>
            <Table striped bordered hover className="categories">
                <thead>
                    <tr>
                        <th>Cookery category</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category =>
                        <CategoryItem key={category.url} item={category} />
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default Categories;