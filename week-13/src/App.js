import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Login } from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header /> 
      <Login />
    </div>
  );
}

export default App;
