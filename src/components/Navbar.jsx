import { FaAngleRight, FaGlobe, FaQuestionCircle, FaRegTimesCircle, FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.svg"
import { useState } from "react";
import modelS from "../assets/images/Model-s-w.jpg";
import modelY from "../assets/images/Model-y-w.jpg";
import modelX from "../assets/images/Model-x-w.jpg";
import model3 from "../assets/images/Model-3-w.jpg";
import solarPanels from "../assets/images/solar-panels-w.jpg"
import megapack from "../assets/images/megapack-w.jpg"
import powerWall from "../assets/images/powerwall-w.jpg"
import solarRoof from "../assets/images/solar-roof-w.jpg"
import charging from "../assets/images/charging-w.jpg"
import superCharging from "../assets/images/supercharging-w.jpg"
import homeCharging from "../assets/images/home-charging-w.jpg"
import vehicleAccessories from "../assets/images/vehicle-accessories.jpg"
import cap from "../assets/images/cap.jpg"
import bag from "../assets/images/bag.jpg"

const Navbar = () => {
    const [smallMenu, setSmallMenu] = useState(false)
    const openMenu = () => {
        setSmallMenu(true);
    }




    const [top, setTop] = useState(true)
    const [menu, setMenu] = useState("")
    window.addEventListener('scroll', function () {
        if (window.scrollY === 0) {
            setTop(true)
        }
        else {
            setTop(false)
        }
    });
    const menuFunction = (menu) => {
        setMenu(menu)
    }

    return (
        <>
            {/* nav for large devices */}
            {
             !smallMenu && <div className="lg:px-16 px-4 py-6 fixed w-full z-20 duration-300">
                <div className="flex justify-between items-center bg-transparent">
                    <div>
                        <img src={logo} alt="Tesla" className="cursor-pointer" />
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex gap-10 font-medium">
                            <li className={`${menu === "vehicles" ? "bg-gray-200 text-black rounded-sm px-4 py-1" : ""} ${top && menu === "" ? "text-white" : ""} cursor-pointer`} onMouseOver={() => menuFunction("vehicles")}>Vehicles</li>
                            <li className={`${menu === "energy" ? "bg-gray-200 rounded-sm text-black px-4 py-1" : ""} ${top && menu === "" ? "text-white" : ""} cursor-pointer`} onMouseOver={() => menuFunction("energy")}>Energy</li>
                            <li className={`${menu === "charging" ? "bg-gray-200 text-black rounded-sm px-4 py-1" : ""} ${top && menu === "" ? "text-white" : ""} cursor-pointer`} onMouseOver={() => menuFunction("charging")}>Charging</li>
                            <li className={`${menu === "discover" ? "bg-gray-200 text-black rounded-sm px-4 py-1" : ""} ${top && menu === "" ? "text-white" : ""} cursor-pointer`} onMouseOver={() => menuFunction("discover")}>Discover</li>
                            <li className={`${menu === "shop" ? "bg-gray-200 text-black rounded-sm px-4 py-1" : ""} ${top && menu === "" ? "text-white" : ""} cursor-pointer`} onMouseOver={() => menuFunction("shop")}>Shop</li>
                        </ul>
                    </div>
                    <div className="hidden gap-4 lg:flex">
                        <div className="w-6 h-6 rounded-full border-0"><FaQuestionCircle className={`border-0 w-full h-full rounded-full ${top ? "bg-white" : "bg-black text-white"} `} /></div>
                        <div className="w-6 h-6 rounded-full border-0"><FaGlobe className={`border-0 w-full h-full rounded-full ${top ? "bg-white" : "bg-black text-white"} `} /></div>
                        <div className="w-6 h-6 rounded-full border-0"><FaUserCircle className={`border-0 w-full h-full rounded-full ${top ? "bg-white" : "bg-black text-white"} `} /></div>
                    </div>
                    <div className="lg:hidden">
                        <p onClick={openMenu} className="px-4 py-1 bg-black text-center bg-opacity-40 text-lg font-semibold rounded-md text-white">Menu</p>
                    </div>

                </div>
            </div>
            }
            <div onMouseLeave={() => menuFunction("")} className={`z-10 bg-white fixed w-full duration-500 hidden lg:block`}>
                {
                    menu === "energy" &&
                    <div className="duration-500 flex justify-center pb-20 pt-32 w-[90%] mx-auto">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col items-center justify-center">
                                <img src={solarPanels} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Solar Panels</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={solarRoof} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Solar Roof</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={powerWall} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Powerwall</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={megapack} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Megapack</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center justify-center">
                            <div className="">
                                <hr className="bg-[#e2e3e3] h-[250px] w-[1px]" />
                            </div>
                            <ul className="font-medium text-[#171a20]">
                                <li>Utilities</li>
                                <li>Commercial</li>
                                <li>Schedule a Consultation</li>

                            </ul>

                        </div>
                    </div>
                }
                {
                    menu === "charging" &&
                    <div className="flex duration-500 justify-center pb-20 pt-32 w-[90%] mx-auto">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col items-center justify-center">
                                <img src={charging} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Charging</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={homeCharging} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Home Charging</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={superCharging} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Super Charging</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-10 items-center justify-center">
                            <div className="">
                                <hr className="bg-[#e2e3e3] h-[250px] w-[1px]" />
                            </div>
                            <ul className="font-medium text-[#171a20]">
                                <li>Charging Calculator</li>
                                <li>Trip Planer</li>
                                <li>Supercharger Voting</li>
                                <li>Destination Charging</li>
                                <li>Commercial Charging</li>
                                <li>Become a Site Host</li>
                            </ul>

                        </div>
                    </div>
                }
                {
                    menu === "shop" &&
                    <div className="flex duration-500 justify-center pb-20 pt-32 w-[90%] mx-auto">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col items-center justify-center">
                                <img src={homeCharging} className="w-52" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Charging</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={vehicleAccessories} className="w-52" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Vehicle Accessories</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={cap} className="w-52" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Apparel</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={bag} className="w-52" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Lifestyle</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    menu === "discover" &&
                    <div className="flex duration-500 justify-center pb-20 pt-32 w-[90%] mx-auto">
                        <div className="flex gap-10 justify-center">
                            <div className="flex flex-col gap-6">
                                <p className="text-[#76777b] font-semibold">Resources</p>
                                <ul>
                                    <li>Demo Drive</li>
                                    <li>Insurance</li>
                                    <li>Video Guides</li>
                                    <li>Customer Stories</li>
                                    <li>Events</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-6 ">
                                <p className="text-[#76777b] font-semibold">Location Services</p>
                                <ul>
                                    <li>Find Us</li>
                                    <li>Trip Planner</li>
                                    <li>Find a Collision Ccenter</li>
                                    <li>Find a Certified Installer</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-6">
                                <p className="text-[#76777b] font-semibold">Company</p>
                                <ul>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Investor Relations</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                }
                {
                    menu === "vehicles" &&
                    <div className="flex duration-500 justify-center pb-20 pt-32 w-[90%] mx-auto">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col items-center justify-center">
                                <img src={modelS} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Model S</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={model3} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Model 3</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={modelX} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Model X</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src={modelY} className="w-64" alt="" />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="font-medium">Model Y</p>
                                    <div className="flex gap-4">
                                        <a href="" className="underline">Learn</a>
                                        <a href="" className="underline">Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center justify-center">
                            <div className="">
                                <hr className="bg-[#e2e3e3] h-[250px] w-[1px]" />
                            </div>
                            <ul className="font-medium text-[#171a20]">
                                <li>Inventory</li>
                                <li>Used Cars</li>
                                <li>Cybertruck</li>
                                <li>Semi</li>
                                <li>Roadster</li>
                                <li>Compare</li>
                                <li>Fleet</li>
                                <li>Demo Drive</li>
                                <li>Trade-in</li>
                            </ul>

                        </div>
                    </div>
                }


            </div>
            {/* nav for large devices ends */}
            {/* nav for small and medium devices */}
            {
                smallMenu && <div className="fixed z-10 bg-white h-[100vh] w-full duration-500">
                    <div>
                        <div className="flex justify-end py-4 px-4">
                            <FaRegTimesCircle className="w-8 h-8"  onClick={()=>setSmallMenu(false)}/>
                        </div>
                        <ul className="pl-4 font-semibold flex flex-col md:gap-2 gap-8 text-xl">
                            <li className="flex items-center justify-between" >Vehicles <FaAngleRight className="mr-4"/></li>
                            <li className="flex items-center justify-between" >Energy <FaAngleRight className="mr-4"/></li>
                            <li className="flex items-center justify-between" >Chargind <FaAngleRight className="mr-4"/></li>
                            <li className="flex items-center justify-between" >Discover <FaAngleRight className="mr-4"/></li>
                            <li className="flex items-center justify-between" >Shop <FaAngleRight className="mr-4"/></li>
                            <li className="flex items-center justify-between" >Support <FaAngleRight className="mr-4"/></li>
                            <li className="flex gap-2"><FaGlobe className="mt-1"/> <div className="flex flex-col">
                                <p>United States</p>
                            <p className="text-xs">English</p>
                            </div> </li>
                            <li className="flex gap-2 items-center"><FaUserCircle/>Account</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;
