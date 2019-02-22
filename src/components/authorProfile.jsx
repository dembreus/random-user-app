import React from "react";
import { getAuthor } from "../services/authorService";

const authorProfile = ({ match }) => {
  const author = async () => await getAuthor(match.params.id);
  console.log("author", author((res, rej) => res.resolve()));
  return (
    <div>
      <h1>{JSON.stringify(author)}</h1>
      {console.log(match)}
    </div>
  );
};

export default authorProfile;
