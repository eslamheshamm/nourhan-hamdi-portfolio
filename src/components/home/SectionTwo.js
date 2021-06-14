import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
	{ url: "https://source.unsplash.com/random" },
	{ url: "https://source.unsplash.com/random" },
	{ url: "https://source.unsplash.com/random" },
];
const SectionTwo = () => {
	return (
		<section className="w-10/12 mx-auto my-12">
			<div className="grid grid-cols-[800px,1fr,1fr] gap-5">
				<div className="flex justify-between items-center w-full">
					<picture className="py-4 w-full text-[22px] text-[#949494]  font-Freight font-light ">
						Jamie Hladky
					</picture>
					<p className="py-4 w-full text-[22px] text-[#949494]  font-Freight font-light ">
						Canberra, Australia
					</p>
				</div>
				<p className="py-4 w-full text-[22px] text-[#949494]  font-Freight font-light ">
					Photographs{" "}
				</p>
				<p className="py-4 italic w-full text-[22px] text-[#949494]  font-Freight font-light ">
					2010 — 2018
				</p>
			</div>
			<div className="grid  lg:grid-cols-[2fr,1fr,1fr] grid-rows-[480px] gap-5">
				<div className="w-full h-full">
					{" "}
					<SimpleImageSlider
						showBullets={false}
						showNavs={true}
						width={800}
						height={504}
						images={images}
					/>
				</div>

				<p className=" text-[22px] text-[#949494]  font-Freight font-light ">
					No one compliments a photograph on the precision of it’s corners or
					the parallelness of its sides, much in the same way that no one
					compliments humans on the general rigidity of their hidden structures
					and biases. Yet it remains true that the borders of a photograph, like
					the prejudices of consciousness, are so defining, so rigid, so
					focus-making that both a “photograph” and a “human” would literally be
					nothing without them. No parameter ︎ no thing.
				</p>
				<p className=" text-[22px] text-[#949494]  font-Freight font-light ">
					In the photographs of Jamie Hladky there seems to be an inherent
					understanding and use of this hidden parametric. The typically clear,
					guiding subject is absent; the viewer is not escorted to a center and
					meaning; this puts uncanny emphasis on the usually hidden outline.
					This frame seems to momentarily rest on a situation rather than
					defining one — this is lovely and sort of like magic.
				</p>
			</div>
		</section>
	);
};
export default SectionTwo;
