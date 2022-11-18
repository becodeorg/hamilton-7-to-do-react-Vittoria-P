import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NewToDo from './components/NewToDo';
import ListToDo from './components/ListToDo';


function App() {
  return (
    <div className="App">
    <Header />
    <NewToDo />
    <ListToDo />
    </div>
  );
}

export default App;
