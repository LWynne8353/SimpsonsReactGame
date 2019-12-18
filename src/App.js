import React, { Component } from 'react';
import SimpsonsCard from "./components/SimpsonsCard";
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons
  };

  componentDidMount() {
    this.shuffle();
  }


  randomize = (id) => {
    console.log("Clicked!")
    console.log(id)

    // map over the simpsons state array
    // within the map do an if(id === characters.id)
    // if characters.clicked is already true, you lose
    // else set characters.clicked to true
    // also increase the score
    // after that, update the state with the new list of characters
    // then shuffle again
  };

  shuffle = () => {
    const shuffledSimpsons = this.state.simpsons.sort(function(a, b){return 0.5 - Math.random()});;
    this.setState({
      simpsons: shuffledSimpsons
    })
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
              randomize={this.randomize}
            />

          ))}
        </div>
      </Wrapper>
    )
  }
}

export default App;
