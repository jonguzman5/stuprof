import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact element={NotFound}/>
        </Routes>
    </BrowserRouter>
)
export default Router;
