import * as React from "react";
import Layouts from "../components/layouts";
import SectionOne from "../components/home/sectionOne";
import SectionTwo from "../components/home/SectionTwo";
import SectionThree from "../components/home/sectionThree";
// styles

// markup
const IndexPage = () => {
	return (
		<Layouts>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</Layouts>
	);
};

export default IndexPage;
