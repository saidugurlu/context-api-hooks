import "../App.css";
import React, { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

export default class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}
