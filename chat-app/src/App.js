import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert, Container, Row, Col, Jumbotron, Toast } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />

      </header>

      <Container fluid="sm" className="show-grid p-3" >
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>
            <Alert variant={`primary`}>
              This is a PRIMARY alert—check it out!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>React Bootstrap</Button>
          </Col>
        </Row>
      </Container>


      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <span role="img" aria-label="tada">🎉</span>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
