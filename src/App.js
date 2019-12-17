import React, { Component } from 'react';
import SimpsonsCard from "./components/SimpsonsCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons
  };

  render() {
    return (
      <Wrapper>
        <Title>Simpsons Memory Game</Title>
        {this.state.simpsons.map(characters => (
          <SimpsonsCard
            image={characters.image} />

        ))}
      </Wrapper>
    )
  }
}

export default App;
