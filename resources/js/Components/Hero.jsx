import React from "react";

function Hero() {
    return (
        <>
            <div className="h-screen">
                <div className="flex flex-wrap w-full h-full p-10">
                    <div className="w-full md:w-1/2 content-center p-6">
                        <h1 className="text-4xl font-bold uppercase py-3">
                            Lorem ipsum dolor
                        </h1>
                        <p className="text-lg text-justify pr-16">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum dicta quisquam accusamus nobis, numquam ullam. Asperiores, molestias voluptatibus. Incidunt esse quibusdam sunt porro minima, aspernatur deleniti illo dolorem possimus veritatis quisquam sequi beatae, mollitia itaque optio iure facere dolor consectetur labore sint neque impedit similique vitae aliquid. Dolor, adipisci?
                        </p>
                        <button className="border border-black py-3 px-8 rounded-xl my-6 hover:bg-[#00406E] hover:text-white">Read More</button>
                    </div>

                    <div className="w-full md:w-1/2 h-full content-center">
                        <img src="/images/hero.png" alt="Foto" width={650} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
