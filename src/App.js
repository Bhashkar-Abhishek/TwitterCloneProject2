
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Footer from "./components/Footer"
import Registration from './pages/Registration/Registration';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/*" element={"Error 404 Page not found"} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
