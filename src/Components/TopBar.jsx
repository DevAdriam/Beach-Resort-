import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
	return (
		<div className="flex justify-between px-4 py-2 items-center">
			<div className="flex items-center">
				<BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2" />
				<h1 className=" font-bold text-xl text-gray-700 uppercase">weekaway</h1>
			</div>

			<div className=" flex">
				<div className="hidden md:flex items-center px-6">
					<AiOutlineClockCircle size={20} className="text-[var(--primary-dark)] mr-2 " />
					<h1 className="text-gray-700 text-sm">9AM - 5AM</h1>
				</div>
				<div className="hidden md:flex items-center px-6">
					<AiFillPhone size={20} className="text-[var(--primary-dark)] mr-2 " />
					<h1 className="text-gray-700 text-sm">01-123-1993</h1>
				</div>
				<button>Get a Free Quote</button>
			</div>
		</div>
	);
};

export default TopBar;
