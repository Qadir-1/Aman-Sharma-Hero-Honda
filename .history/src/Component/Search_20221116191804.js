/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Assets/Navbar";
import './Search.css'

const Search = () => {
  return (
    <>
      <NavBar />
      <Container className="search">
        <form className="searchForm">
          <input type={"text"} placeholder="Mobile Number" />
          <br />
          <br />
          <input type={"email"} placeholder="Car Regestration" />
          <br />
          <br />
          <input type={"text"} placeholder="Customer Name" />
          <br />
          <br />
          <button className="searchBtn">SEND</button>
        </form>
      </Container>
    </>
  );
};

export default Search;
