import React, { Component } from 'react';
import { MyHeader } from './Header/Header';
import { ListBlog } from './Main/Main';
import { MyFooter } from './Footer/Footer';
import { BrowserRouter } from "react-router-dom"
import { BlogList } from '../services/service'

// Posts()

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <MyHeader />
          <ListBlog />
          <MyFooter />
        </div>

      </div>
    );
  }
}

export default App;


