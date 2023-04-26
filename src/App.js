
import './App.css';
import {Routes , Route} from "react-router-dom"
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Home from './pages/Home/Home'
import MainPage from './pages/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      
   <MainPage/>

     <Routes>
      <Route  path="/" element={<Login/>}/>
      <Route  path="/SignUp" element={<Registration/>}/>
      <Route  path="/home" element={<Home/>}/>
     </Routes>

    </div>
  );
}

export default App;
