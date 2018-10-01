import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: false
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
    console.log('Button clicked');
  }
  render() {
    const homerWork = this.state.working ? 'Reverse-App' : 'App-logo';
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className={homerWork} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
         </header>
         <button onClick={this.handleClick}> Homer work </button>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Lamp on />
        <Lamp />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
      </div>
    );
  }
}


export default App;