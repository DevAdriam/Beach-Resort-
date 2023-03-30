import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaBars, FaTwitter } from "react-icons/fa";
const Navbar = () => {
	const [nav, SetNav] = useState(false);
	const showMenu = () => {
		SetNav(!nav);
	};
	return (
		<div className="w-full min-h-[50px] flex justify-between items-center text-white bg-gray-700/80">
			<ul className=" hidden sm:flex">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
				<li>
					<a href="#deals">Deals</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="flex justify-between ">
				<FaFacebookF className="mx-4" />
				<FaTwitter className="mx-4" />
				<FaGooglePlusG className="mx-4" />
				<FaInstagram className="mx-4" />
			</div>

			{/* Hamburger Menu */}
			<div className="flex sm:hidden z-20">
				<FaBars size={20} className="cursor-pointer mr-4" onClick={showMenu} />
			</div>

			{/* Mobile Menu */}
			<div
				className={
					nav
						? "w-full h-screen bg-black/80 px-4 py-7 absolute left-0 top-0 text-white overflow-y-hidden md:hidden ease-in duration-300 z-10"
						: "h-screen absolute top-0 left-[-100%] ease-in duration-500"
				}
				onClick={showMenu}
			>
				<ul className="w-full h-full text-center">
					<li className="text-xl py-8 ">
						<a href="/">Home</a>
					</li>
					<li className="text-xl py-8 ">
						<a href="#gallery">Gallery</a>
					</li>
					<li className="text-xl py-8 ">
						<a href="#deals">Deals</a>
					</li>
					<li className="text-xl py-8 ">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
