import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Home from "pages/Home";
import Catalog from "pages/Home/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const BRoutes = () => (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element= {<Home />}>  </Route>
                <Route path="/products" element= {<Catalog />}>  </Route>
                <Route path="/admin" element= {<Admin />}>  </Route>

            </Routes>
        </BrowserRouter>



    );


export default BRoutes;