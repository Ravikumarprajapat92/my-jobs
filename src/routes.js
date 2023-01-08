import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./screens/Login/Login";
import { LandingPage } from './screens/LandingPage/LandingPage'
import JobPost from "./screens/JobPost/JobPost";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<LandingPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="job-posts" element={<JobPost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
