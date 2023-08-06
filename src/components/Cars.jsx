import 'aos/dist/aos.css';
import "./cars.css"
import { useEffect } from "react"
import AOS from "aos"
const Cars = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="model-3 w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Model 3</h1>
                    <div className="flex flex-col items-center justify-center lg:mt-6 mt-2 lg:text-sm">
                        <p className="">Starting at $32,740</p>
                        <p className="">After Federal Tax Credit</p>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 px-4 lg:px-16 rounded text-center">Custom Order</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 px-4 lg:px-16 rounded text-center">Demo Drive</button>
                </div>

            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="model-y w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"

                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Model Y</h1>
                    <div className="flex flex-col items-center mt-6 text-xl justify-center">
                        <p className="">Starting at $40,240</p>
                        <p className="">After Federal Tax Credit</p>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"


                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Custom Order</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Demo Drive</button>
                </div>

            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="model-s w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"

                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Model S</h1>
                    <div className="text-center mt-6 text-xl">
                    <a href="" className="underline">Explore Inventory</a>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"


                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Custom Order</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Demo Drive</button>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="model-x w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Model X</h1>
                    <div className="text-center mt-6 text-xl">
                    <a href="" className="underline">Explore Inventory</a>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Custom Order</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Demo Drive</button>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="solar-panels w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Solar Panels</h1>
                    <div className="text-center mt-6 text-xl">
                    <a href="" className="underline">Schedule a Virtual Consultation</a>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Order Now</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Learn More</button>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="solar-roof w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Solar Roof</h1>
                    <div className="text-center mt-6 text-xl">
                    <a href="" className="">Produce Clean Energy From Your Roof</a>
                    </div>
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Order Now</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Learn More</button>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="powerwall w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Powerwall</h1>
                    
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Order Now</button>
                    <button className="bg-[#2e2e34] text-white font-semibold py-2 lg:px-16 px-4 rounded text-center">Learn More</button>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                className="accessories w-[100vw] h-[100vh] flex flex-col items-center justify-between py-8 lg:py-32">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <h1 className="lg:text-5xl text-xl font-bold text-center">Accessories</h1>
                    
                </div>
                <div className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                >
                    <button className="bg-[#c9c8c8] text-black font-semibold py-2 lg:px-16 px-4 rounded text-center">Shop Now</button>
                   
                </div>
            </div>
        </div>
    );
};

export default Cars;