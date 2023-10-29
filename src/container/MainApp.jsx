import { Route, Routes } from "react-router";
import Home from "../components/HomePage/Home";
import MainLayout from "../layouts/MainLayout";

const MainApp = () => {
    return (
        <MainLayout>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </MainLayout>
    );
}

export default MainApp;