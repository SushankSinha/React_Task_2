import React, { useState } from "react";
import Blink from "react-blink-text";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "./Card";
import CardDetails from "./CardDetails";

function Home() {
  const [AddtoCart, setAddtoCart] = useState(0);
  const [deletetoCart, setDeletetoCart] = useState(0);

  const date = new Date().getFullYear();

  function cartValue() {
    setAddtoCart(AddtoCart + 1);
  }

  function updatedCartValue() {
    setDeletetoCart(deletetoCart + 1);
  }

  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h1 style={{ color: "pink" }}>
            <ShoppingCartIcon style={{ fontSize: "45px" }} /> Shopping Bazaar
          </h1>
          <button
            type="button"
            className="btn btn-primary position-relative mx-3"
          >
            <ShoppingCartIcon /> Cart{" "}
            {AddtoCart > 0 ? AddtoCart - deletetoCart : AddtoCart}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          </button>
        </div>
      </nav>
      <div style={{ backgroundColor: "grey" }}>
        <div className="jumbotron">
          <Blink color="maroon" text="!! Monsoon Sale !!"></Blink>
          <p>
            <b>
              Get upto 30% off on any product! Offer valid till 31st August!
            </b>
          </p>
        </div>
      </div>
      {CardDetails.map(function (res, index) {
        return (
          <Card
            key={index}
            id={index}
            name={res.name}
            imgURL={res.imgURL}
            price={res.price}
            rating={res.rating}
            addToCart={cartValue}
            deleteToCart={updatedCartValue}
          />
        );
      })}
      <footer className="text-center">
        <hr />
        <div
          style={{
            margin: "auto",
            display: "inline-block",
            flexDirection: "row"
          }}
        >
          <FacebookIcon className="mx-3 my-2" />
          <InstagramIcon className="mx-3 my-2" />
          <TwitterIcon className="mx-3 my-2" />
        </div>
        <div className="mx-3 my-2"> Copyright © {date} </div>
      </footer>
    </>
  );
}

export default Home;
