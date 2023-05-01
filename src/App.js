
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/*" element={"Error 404 Page not found"} />
      </Routes>

  

    </div>
  );
}

export default App;
