import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base } from "./components";
import { Homepage, About, Contact } from "./pages";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Base />} >
                        <Route index element={<Homepage />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}