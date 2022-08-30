type SectionHeaderProps = {
	heading: string
}

const SectionHeader = (props: SectionHeaderProps) => {

	const {heading} = props;

	return (
		<>
			<div className="uppercase text-center text-xl tracking-widest md:text-left md:text-4xl">{heading}</div>
			<div>
				<hr className="m-auto w-32 md:m-0 md:w-full" />
			</div>
		</>
	)
}

export default SectionHeader
