import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "./../services/authorService";

class authorList extends Component {
  state = {
    authors: []
  };

  async componentDidMount() {
    const authors = await getAuthors();
    this.setState({ authors });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>

        {this.state.authors.map(author => {
          return (
            <li
              className="card"
              style={{ width: "18rem" }}
              key={author.login.id}
            >
              <img
                src={author.picture.large}
                className="card-img-top"
                alt={author.name.first}
                key={author.login.id}
              />

              <div className="card-body" key={author.login.id}>
                <h5 className="card-title" key={author.login.id}>
                  {`${author.name.first} ${author.name.last}`}
                </h5>
                <p className="card-text" key={author.login.id}>
                  {`${author.login.username}\n${author.email}`}
                </p>
                <Link
                  to={`/authors/${author.login.uuid}`}
                  className="btn btn-primary"
                  key={author.login.id}
                >
                  View Profile
                </Link>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default authorList;
