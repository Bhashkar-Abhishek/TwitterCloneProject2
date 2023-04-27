
import './App.css';
import {Routes , Route} from "react-router-dom"
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
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
      <Route  path="/*" element={"Error 404 Page not found"}/>
     </Routes>

    </div>
  );
}

export default App;
