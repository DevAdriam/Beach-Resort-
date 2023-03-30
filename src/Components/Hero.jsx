import React from "react";

const Hero = () => {
	return (
		<div className="w-full h-[90vh]">
			<div>
				<img
					src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
					alt="Beach"
					className="w-full h-full md:h-[90vh] object-cover"
				/>
			</div>
			<div className="max-w-[1140px] m-auto -z-10">
				<div className="max-w-[680px] w-full h-full absolute md:top-[45%] top-[50%] text-white flex flex-col p-4">
					<h1 className="text-4xl font-bold py-2">Find Your Special Trip</h1>
					<h2 className="text-4xl font-bold italic py-2">With WEEKAWAY</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil earum, consectetur recusandae vel
						vitae quidem perferendis nulla fugit quibusdam praesentium. Libero molestiae amet consequuntur
						culpa, earum fugiat nemo impedit odio?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
