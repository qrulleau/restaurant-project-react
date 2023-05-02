import React from "react";

function Article(props){

  return (
    <div className="article">
      <img src={props.imageUrl} alt="" />
      <h3>{props.title}</h3>
      <p>{props.date}</p>
    </div>
  );
}

export default Article;