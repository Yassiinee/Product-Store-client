import React, { useState } from "react";
import styled from "styled-components";
import spinner from "../spinner-1.gif";
import { Link } from "react-router-dom";
import axios from "axios";
const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);
  // DELETE ARTICLE BY ID
  const deleteArticle = id => {
    axios
      .delete(`http://localhost:8080/articles/${id}`)
      .then(res => [
        alert(res.data),
        console.log("The Article is DELETED !!!")
      ]);
    setArticle(article.filter(elem => elem._id !== id));
  };
  return (
    <MainContainer>
      {!posts.length ? (
        <img src={spinner} alt="loading..." />
      ) : (
        posts.map((article, key) => (
          <div className="container" key={key}>
            <Link
              to={{
                pathname: `/article/${article._id}`
              }}
            >
              <h2>{article.title}</h2>
            </Link>

            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorname}
            </span>
            <div className="row my-3">
              <div className="col-sm-2">
                <Link
                  to={`/update/${article._id}`}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2">
                <button
                  onClick={() => deleteArticle(article._id)}
                  className="btn btn-outline-danger"
                >
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;

// MAIN CONTEINER
const MainContainer = styled.div`
  margin: 7rem 0;
  img {
    width: 10 rem;
    display: block;
    margin: 0 auto;
  }
`;
