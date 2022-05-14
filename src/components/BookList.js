import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";
import BookContext from "../contexts/BookContext";

class Booklist extends Component {
  static contextType = BookContext;
  render() {
    const books = this.context;

    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Kitaplik</h2>
            <h3 className="section-subheading text-muted">
              Taktuka taktuka tutukaka kakakuklata.
            </h3>
          </div>
          <div className="row">
            {books.map((book, i) => {
              return <Book book={book} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Booklist;
