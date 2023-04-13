import logo from './logo.svg';
import './App.css';
import Address from './Components/Profile/Address.js'
import Profile from './Components/Profile/ProfilePhoto.js'
import FullName from './Components/Profile/FullName.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile/>
        <FullName/>
        <Address/>
      </header>
    </div>
  );
}

export default App;
