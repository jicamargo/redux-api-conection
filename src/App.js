import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={"150PX"} />
      </header>
      <UserList />
    </div>
  );
}

export default App;
