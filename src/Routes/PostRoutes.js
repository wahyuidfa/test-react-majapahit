import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";


export default function ProductsRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/detail/:index" element={<Detail/>}/>
            </Routes>
        </Router>
    )
}