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

  const searchStories = stories.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Search = ({search,onSearch}) => {
    return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch} />
    </div>)
  };

  const handleChange=(e)=>{
    setSearchTerm(e.target.value);
  }

  

  const List = ({ list }) => {
    return(
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>);
  };

  const Item = ({ item }) => {
    return (
      <ul key={item.objectID}>
        
        <li>{item.author}</li>
        <li>{item.title}</li>
        <li>{item.url}</li>
      </ul>
    );
  };

  return (
    <div className="App">
      <Search  search={searchTerm} onSearch={handleChange}/>
      <List list={searchStories} />
    </div>
  );
}

export default App;
