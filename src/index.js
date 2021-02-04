import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmailDetails from './Components/EmailDetails';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SidebarExampleVisible from "./Components/Sidebar";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
     <SidebarExampleVisible/>
    <div>
      <Route path="/" exact component={App}/>
      <Route path='/email' exact={true} component={EmailDetails}/>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

