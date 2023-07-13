import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import CancelIcon from "@mui/icons-material/Cancel";

function Card(props) {
  const [Add, setAdd] = useState(0);

  return (
    <div
      className="card mx-5 my-3 p-1"
      style={{
        width: "18rem",
        display: "inline-block",
        border: "2px solid black"
      }}
    >
      <img
        style={{ width: "15rem", height: "15rem" }}
        src={props.imgURL}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-text">{props.price}</h6>
        <h6 className="card-text">{props.rating}</h6>
      </div>
      <div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setAdd(Add + 1);
            props.addToCart();
          }}
          disabled={Add > 0 ? true : false}
        >
          <span role="img" aria-label="Add">
            Add <FontAwesomeIcon icon={faCartPlus} /> {""}
          </span>
          {Add}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setAdd(Add > 0 ? Add - 1 : 0);
            props.deleteToCart();
          }}
          disabled={Add === 0 ? true : false}
        >
          <span role="img" aria-label="dislike">
            Delete <CancelIcon style={{ fontSize: "medium" }} />
          </span>
        </button>
      </div>
    </div>
  );
}
export default Card;
