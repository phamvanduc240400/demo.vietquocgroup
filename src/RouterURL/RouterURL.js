import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import HomeWrap from '../home/home';
import Duan from '../menu2/Duan';

export default class RouterURL extends Component {
  render() {
    return (
     
        <div>
          <Route path='/'><HomeWrap/></Route>
          <Route path='du-an'><Duan/></Route>
        </div>
     
    )
  }
}
