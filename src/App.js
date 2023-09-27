import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
    this.oldstate = this.state;
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          this.oldstate = { monsters: users };
          return { monsters: users };
        })
      );
  }
  updateSearchField = (event) => {
    let searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { updateSearchField } = this;
    let monstersList = monsters.filter((e) =>
      e.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <input
          className="search"
          placeholder="Search for a monster"
          onChange={updateSearchField}
        />
        {monstersList.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
