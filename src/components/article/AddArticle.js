import React, { useState } from "react";
import "./AddArticle.css";

const AddArticle = ({ saveArticle }) => {
    const [article, setArticle] = useState();
    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value
        })
    }

    const addNewArticle = e => {
        e.preventDefault();
        saveArticle(article);
    }

    return (
        <form onSubmit={addNewArticle} className="add-article">
            <input type="text" id="title" placeholder="Title" onChange={handleArticleData}></input>
            <input type="text" id="body" placeholder="Body" onChange={handleArticleData}></input>
            <button>Add Article</button>
        </form>
    )
}

export default AddArticle;