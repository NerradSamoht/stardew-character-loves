import React, { Component } from "react";
import stardew from "./stardew.json";
import Character from "./Character";
import uniqid from "uniqid";

const data = stardew.Characters;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: data,
      showCharacter: false,
      name: null,
      birthday: null,
      loves: null,
      img: null
    };
  }

  getCharacter = e => {
    const name = e.target.getAttribute("data-name");
    const character = this.state.characters.filter(item => item.name === name);
    console.log(character);

    if (character.length > 0) {
      this.setState(
        {
          name: character[0].name,
          birthday: character[0].birthday,
          loves: character[0].loves,
          img: character[0].img
        },
        this.showCharacter()
      );
    }
  };

  showCharacter = () => {
    this.setState({
      showCharacter: true
    });
  };

  hideCharacter = () => {
    this.setState({
      showCharacter: false
    });
  };

  render() {
    const characterList = this.state.characters.map(item => (
      <button key={uniqid()} onClick={this.getCharacter} data-name={item.name}>
        <img
          src={process.env.PUBLIC_URL + item.img}
          alt={item.name}
          title={item.name}
          data-name={item.name}
        />
      </button>
    ));

    return (
      <div>
        {!this.state.showCharacter ? (
          <div>
            <div className="container">
              <div>
                <h2>Select a character</h2>
                <div className="character-list">{characterList}</div>
              </div>
            </div>
            <footer>
              <p>
                All content and images from the{" "}
                <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki">
                  Official Stardew Valley Wiki
                </a>
                . <br />
                Licenced under{" "}
                <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
                  Creative Commons Attribution-NonCommercial-ShareAlike
                </a>
                .
              </p>
            </footer>
          </div>
        ) : (
          <div className="container">
            <Character
              hideCharacter={this.hideCharacter}
              img={this.state.img}
              name={this.state.name}
              birthday={this.state.birthday}
              loves={this.state.loves}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
