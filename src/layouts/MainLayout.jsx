import { Fragment } from "react";

import Navbar from "../components/common/Navbar";


const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
}

export default MainLayout;