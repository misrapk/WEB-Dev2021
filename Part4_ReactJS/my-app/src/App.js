import React, { Component } from "react";
import CardList from "./CardList";
import { players } from "./players";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();

    //state always changes in the app--> like any input 
    this.state = {
      players: players,
      searchfield: "",
    }
  }

  //this function runs every time any state change
  onSearchChage = (event) => {
      
    this.setState({ searchfield: event.target.value });
  };

  render() {
      //manage the state
    const filterPlayer = this.state.players.filter((player) => {
      return player.role
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Indian Cricket Team</h1>
        <SearchBox searchChange={this.onSearchChage} />
        <CardList players={filterPlayer} />
      </div>
    );
  }
}

export default App;
