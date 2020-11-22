import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Read from './Read/Read';
import reportWebVitals from './reportWebVitals';
import ButtonAppBar from "./Components/ButtonAppBar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UpdateCarDetails from "./Update/UpdateCarDetails";
import CreateCar from "./Create/CreateCar";

ReactDOM.render(
    (<BrowserRouter>
      <ButtonAppBar/>
      <Switch>
        <Route exact path='/' component={Read} />
        <Route path='/update' component={UpdateCarDetails} />
      </Switch>
    </BrowserRouter>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
