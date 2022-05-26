import './App.css';
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
