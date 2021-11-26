import React, { Component } from "react";
import CardList from "./CardList";
import { players } from "./players";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();

    //state always changes in the app--> like any input
    this.state = {
      players: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ players: players });
  }
  //this function runs every time any state change
  onSearchChage = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    //manage the state
    const filterPlayer = this.state.players.filter((player) => {
      return player.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.players.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className = 'f1'> Indian Cricket Team </h1>
          <SearchBox searchChange={this.onSearchChage} />
        
          <Scroll>
            <CardList players={filterPlayer} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
