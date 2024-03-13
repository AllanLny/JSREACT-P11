import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/Sidebar';
import UserPage from './components/User/UserPage';
import UserData from './components/UserData/UserData';

function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>
        <UserPage/>
        <UserData/>
    </div>
  );
}

export default App;
