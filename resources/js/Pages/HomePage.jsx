import ApplicationLogo from "@/Components/ApplicationLogo";
import Navbar from "@/Components/Navbar";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const HomePage = ({ auth, books }) => {
    console.log("books", books);

    return (
        <>
            <Navbar auth={auth} />
        </>
    );
};

export default HomePage;
