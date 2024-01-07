import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      // ... other dogs
    ]
  };

  render() {
    return (
      <div>
        <Nav dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={this.props.dogs} />
          </Route>
          <Route path="/dogs/:name">
            <DogDetails dogs={this.props.dogs} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
