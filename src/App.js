import './App.css';
import Home from './components/Page/HomePage/home.js';
import PageUser from './components/Page/PageUser/PageUser.js';
import Page404 from "./components/Page/Page404/Page404.js";
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/12" element={<PageUser />} />
          <Route path="/user/18" element={<PageUser />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
