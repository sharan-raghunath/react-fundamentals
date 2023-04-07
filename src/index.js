import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from "./Home";
import ReactNews from "./ReactNews";
import JavaScriptNews from "./JavaScriptNews";
import App from "./App";
import NewsLayout from "./NewsLayout";
import WeatherApp from "./OldStuff/WeatherApp";
import NewsResults from "./NewsResults";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route element={ <App /> }>
                <Route path="/" element={<Home />} />
                <Route path="/news/" element={<NewsLayout />}>
                    <Route path=":newsTopic" element={<NewsResults />} />
                </Route>
                <Route path="/weatherapp" element={<WeatherApp />} />
            </Route>
        </Routes>
    </Router>
    // </React.StrictMode>
);