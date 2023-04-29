
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={"Error 404 Page not found"} />
      </Routes>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
