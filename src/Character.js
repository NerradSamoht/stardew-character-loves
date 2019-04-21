import React, { Component } from "react";
import uniqid from "uniqid";

class Character extends Component {
  render() {
    const loves = this.props.loves.map(item => {
      const file = item.replace(/\s/g, "_");
      const src = "/assets/" + file + ".png";
      return (
        <li key={uniqid()}>
          <img src={process.env.PUBLIC_URL + src} alt="" />
          {item}
        </li>
      );
    });

    return (
      <div className="">
        <button onClick={this.props.hideCharacter} className="close">
          X
        </button>
        <img
          width="80"
          src={process.env.PUBLIC_URL + this.props.img}
          className="profile-pic"
          alt={this.props.name}
        />
        <p className="name">{this.props.name}</p>
        <p className="birthday">Birthday: {this.props.birthday}</p>
        <ul className="list">{loves}</ul>
      </div>
    );
  }
}

export default Character;
