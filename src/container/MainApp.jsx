import { Route, Routes } from "react-router";
import Home from "../components/HomePage/Home";
import MainLayout from "../layouts/MainLayout";
import { Fragment } from "react";
import Customize from "../components/customizePage/Customize";

const MainApp = () => {
    return (
        <MainLayout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/customize" element={<Customize />} />
            </Routes>
        </MainLayout>
    );
}

export default MainApp;