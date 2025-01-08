import ApplicationLogo from "@/Components/ApplicationLogo";
import Card from "@/Components/Card";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Title from "@/Components/Title";
import GuestLayout from "@/Layouts/GuestLayout";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import React from "react";

const HomePage = ({ auth, books }) => {
    console.log("books", books);

    return (
        <>
            <div className="relative min-h-screen">
                <Navbar auth={auth} />
                <div className="">
                    <div className="mx-auto sm:px-6 lg:px-8">
                        <Hero />
                    </div>
                    <div className="w-full bg-[#2F2C2C]  ">
                        <Title />
                        <div className="w-[1100px] m-auto gap-10 grid grid-cols-4">
                            {books.slice(0, 8).map((data, i) => {
                                return (
                                    <>
                                        <Card
                                            title={data.title}
                                            author={data.author}
                                            year={data.year}
                                            rate={data.rating}
                                        />
                                    </>
                                );
                            })}
                        </div>

                        <div className="p-6 text-white w-full text-center ">
                            <a
                                href="/"
                                className="flex justify-center content-center hover:opacity-50"
                            >
                                <p className="text-lg">See All</p>
                                <div className="px-2 content-center">
                                    <Icon
                                        icon="mdi-light:arrow-right"
                                        width="20"
                                        height="20"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
