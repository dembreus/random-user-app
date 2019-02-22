const url = "https://randomuser.me/api/?results=10";
const urlById = "https://randomuser.me/api/?id=";

export const getAuthors = () => {
  return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
    .catch(ex => {
      ex.log(ex[0].message);
      console.log("error with getAuthors");
    });
};

export const getAuthor = id => {
  return fetch(`${urlById}/${id}`)
    .then(res => res.json())
    .then(data => data.results)
    .catch(ex => {
      ex.log(ex[0].message);
      console.log("can't get this author");
    });
};
