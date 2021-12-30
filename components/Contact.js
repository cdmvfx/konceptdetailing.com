import { useState } from "react"
import SectionHeader from "./elements/SectionHeader"

const Contact = () => {

	const [inputs, setInputs] = useState({
		name: '',
		email: '',
	});

	const changeInputs = (key, val) => {
		let newInputs = {...inputs};
		newInputs[key] = val;
		setInputs(newInputs);
	}

	return (
		<div className="flex flex-col space-y-4 justify-center items-center p-8 bg-neutral-900">
			<SectionHeader heading="Contact" />
			<div>
			</div>
		</div>
	)
}

export default Contact
