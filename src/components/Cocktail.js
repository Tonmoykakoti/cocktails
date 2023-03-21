import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ thumb, info, drink, id, glass }) => {
  return (
    <article className="cocktail">
      <div className="imag-conatiner">
        <img src={thumb} alt={drink} />
      </div>
      <div className="cocktail-footer">
        <h3>{drink}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
