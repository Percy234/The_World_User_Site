import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../component/Header.jsx";

const MainLayout = () => {
    return (
        <Box>
            <Header />
            <Outlet />
        </Box>
    )
};

export default MainLayout;