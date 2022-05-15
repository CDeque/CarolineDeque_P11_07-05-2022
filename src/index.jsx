import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer"
import GlobalStyle from "./utils/style/GlobalStyle"

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle/>
            <Header/>
        <Routes>
            <Route exact path= "/" element= {<Home />}/>
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>

        <Footer/>
        </Router>
    </React.StrictMode>
)
