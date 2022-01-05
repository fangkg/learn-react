import React, { useState } from "react";
import { connect } from "react-redux";
import Article from "../components/article/Article";
import AddArticle from "../components/article/AddArticle";
import * as actionTypes from "../store/actionTypes";
import { addArticle, simulateHttpRequest } from "../store/actionCreator";

const Articles = ({ articles, saveArticle }) => {
    // const [articles, setArticles] = useState([
    //     {
    //         id: 1,
    //         title: "post 1",
    //         body: "cursus metus vitae1"
    //     },
    //     {
    //         id: 2,
    //         title: "post 2",
    //         body: "cursus metus vitae2"
    //     }
    // ])

    // const saveArticle = e => {
    //     e.preventDefault();
    // }

    // return (
        
    // )

    <div>
        <AddArticle saveArticle={saveArticle}/>
        {
            articles.map(article => (
                <Article key={article.id} article={article}/>
            ))
        }
    </div>
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // saveArticle: article => 
        //     dispatch({
        //         type: actionTypes.ADD_ARTICLE,
        //         articleData: {
        //             article
        //         }
        //     })
        // saveArticle: article => dispatch(addArticle(article))
        saveArticle: article => dispatch(simulateHttpRequest(article))
    }
}

console.log('articles:', articles)
export default connect(mapStateToProps, mapDispatchToProps)(Articles);