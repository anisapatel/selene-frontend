import React from "react";
import { Link } from "react-router-dom";
import "./Title.css";

const Title = () => {
  return (
    <h1 className="title">
      <Link className="title__link" to="/">
        SELENE
      </Link>
    </h1>
  );
};

export default Title;
