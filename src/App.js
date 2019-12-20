import React, { Component } from 'react';
import SimpsonsCard from "./components/SimpsonsCard";
import Title from "./components/Title";
import Counter from "./components/CounterCard";
import Wrapper from "./components/Wrapper";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons, 
    clickedCharacter: [], 
    counter: 0, 
    topScore: 0
  };

  // componentDidMount() {
  //   this.shuffle();
  // }


  randomize = id => {
    this.shuffle();
    console.log("Clicked!")
    console.log(id)

    let trackingScore = this.state.counter;
    //  let zero = this.state.counter;

    if (!this.state.clickedCharacter.includes(id)) {
      this.state.clickedCharacter.push(id)
      trackingScore = trackingScore + 1;
      //this.state.clickedCharacter = true;
      //counter increase
      this.setState({ counter: trackingScore})
      console.log(trackingScore)
    }
    else if (this.state.clickedCharacter.map(id)){
      this.state.clickedCharacter.reset(id)
      // zero = this.state.counter =  0;
      
      this.setState({ counter: 0})
      // console.log (zero)


      //Game over
      //counter stops
    }
    // const countSimpsons = this.state.simpsons.map(characters => {
    //   if (id === characters.id) {
    //     if (characters.clicked === true) {
    //       alert("player lost")
    //     }
    //     else if (characters.clicked = true){

    //         // incrementCount(
    //         //   count = this.setState.simpsons + 1
    //         // );
    //       }

    //       return characters;
    //     };

    // this.setState({
    //   simpsons: countSimpsons
    // });

    // console.log(this.state.simpsons);

    // map over the simpsons state array -- done
    // within the map do an if(id === characters.id) -- done
    // if characters.clicked is already true, you lose -- done
    // else set characters.clicked to true -- done
    // also increase the score
    // after that, update the state with the new list of characters
    // then shuffle again
    // })
  }

  shuffle = () => {
    const shuffledSimpsons = this.state.simpsons.sort(function (a, b) { return 0.5 - Math.random() });;
    this.setState({
      simpsons: shuffledSimpsons
    })
  
  // scrample = () => {
  //   const zeroScore = this.state.clickedCharacter.reset(function(){for (i = 0; i < id.length;i ++);
  //}
  }

  render() {
    return (
      <Wrapper>
        <Title>Simpsons Memory Game</Title>
        <div>
        <Counter>Score</Counter>
        {this.state.counter}
        </div>
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
