import { Link } from "@inertiajs/react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";

const Navbar = ({ auth }) => {
    return (
        <>
            <div className="sm:fixed sm:top-0 sm:right-0 w-full p-6 text-end">
                {auth.user ? (
                    <div className="flex justify-between">
                        <div className="grid grid-cols-3 items-center">
                            <ApplicationLogo className="w-10 h-10 fill-current text-gray-500 col-span-1" />
                            <h1 className="col-span-2">TokoBuku</h1>
                        </div>

                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <div className="grid grid-cols-3 items-center">
                                <ApplicationLogo className="w-10 h-10 fill-current text-gray-500 col-span-1" />
                                <h1 className="col-span-2">TokoBuku</h1>
                            </div>

                            <div>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Navbar;
