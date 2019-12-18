import React, { Component } from 'react';
import SimpsonsCard from "./components/SimpsonsCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons
  };
  randomize = (id) => {
    console.log("Clicked!")
    console.log(id)
 if (id === true) {
     const simpsons = this.id.shuffle
    }
  }
  render() {
    return (
      <Wrapper>
        <Title>Simpsons Memory Game</Title>
        <div className="row">
          {this.state.simpsons.map(characters => (
            <SimpsonsCard
              image={characters.image} 
              id={characters.id}
              key={characters.id}
              randomize={() => this.randomize(characters.id)}
              />

          ))}
        </div>
      </Wrapper>
    )
  }
}

export default App;
