import React, { Component } from "react";

class Book extends Component {
  return;

  render() {
    return (
      <div>
        <h2>{this.props.book.title}</h2>
        <h4>{this.props.book.author}</h4>
      </div>
    );
  }
}

export default Book;
