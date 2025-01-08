import { Icon } from "@iconify/react";
import React from "react";

const Card = ({ title, author, year, rate, action }) => {
    return (
        <>
            <div className="p-2 shadow-lg rounded-lg bg-slate-100 w-[250px]">
                <div className="my-2 w-full justify-center flex">
                    <img
                        src="https://images.unsplash.com/photo-1735977223167-93229826ff32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Foto"
                        height={500}
                        width={200}
                    />
                </div>

                <div className="text-center">
                    <h1 className="font-bold text-xl">{title} </h1>
                    <h2 className="font-thin text-sm">{author}</h2>
                    <div className=" p-2">
                        <p>( {year} )</p>
                        <p className="flex justify-center px-2">
                            {Array.from({ length: rate }).map((_, index) => (
                                <Icon
                                    icon="material-symbols:star"
                                    width="24"
                                    height="24"
                                />
                            ))}

                            {/* <Icon
                                icon="material-symbols:star"
                                width="24"
                                height="24"
                            />
                            <span>{rate}</span> */}
                        </p>
                    </div>
                </div>

                <div className="m-3">
                    <button
                        className="bg-[#00406E] text-white p-2 w-full rounded-xl"
                        onClick={action}
                    >
                        View Detail
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;
