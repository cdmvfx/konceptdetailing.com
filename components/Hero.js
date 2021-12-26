const Hero = () => {
	return (
		<div style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/photos/red-mercedes-1.jpg')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-screen w-full">
			<div className="flex flex-col items-center justify-center h-screen">
				<div>The cleanest your car will ever be.</div>
				<div>Coming soon.</div>
			</div>
		</div>
	)
}

export default Hero
