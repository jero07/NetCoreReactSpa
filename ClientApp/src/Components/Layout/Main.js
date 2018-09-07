import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Main/Home';
import Dash from '../Main/Dash';
class Main extends Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dash' component={Dash} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Main;