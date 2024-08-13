import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import { Home } from "@mui/icons-material";
import { VerPost } from "../pages/VerPost";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/verpost" element={<VerPost />} />
            </Routes>
        </BrowserRouter>
    )
}

