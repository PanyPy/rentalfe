import React, { useState } from "react";

import logo from '../../logo.svg';
import {Alert, Button} from "react-bootstrap";

const Home = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Alert>Back-End: GraphQL/Node/Mongo/Typescript</Alert>
      <Alert>Front-End: GraphQL/React/Typescript</Alert>
      Feel free to contact me if you have any doubt. <a href = "mailto: diazpany@gmail.com">diazpany@gmail.com</a>


      <Button onClick={(a) => setClicked(true)} disabled={isClicked}>{isClicked ? "Catch you :). Please use Navbar!" : "DO NOT CLICK" }</Button>
    </header>
  )
}
export default Home;