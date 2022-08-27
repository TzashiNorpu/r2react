import "./App.css";
import { useState } from "react";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const searchStory = stories.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const Search = (props) => {
    <div>
      <label htmlFor="search">Search: </label>
      # leanpub-start-insert
      <input id="search" type="text" onChange={props.onSearch} />#
      leanpub-end-insert
    </div>;
  };
  const List = ({ list }) => {
    <ul>
      {list.map((item) => (
        <Item key={item} item={item.objectID} />
      ))}
    </ul>;
  };

  const Item = ({ item }) => {
    return (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    );
  };

  return (
    <div className="App">
      <Search onChange={searchStory} />
      <List list={stories} />
    </div>
  );
}

export default App;
