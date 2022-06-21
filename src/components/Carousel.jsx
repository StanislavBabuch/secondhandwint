function Carousel({ children, images }) {
	return (
		<>
			<div class="carousel w-full">
				{images.map((image) => (
					<div id="item3" class="carousel-item w-full">
						<img src={image} class="w-full" />
					</div>
				))}

				<div id="item4" class="carousel-item w-full">
					<img
						src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
						class="w-full"
					/>
				</div>
			</div>
			<div class="flex justify-center w-full py-2 gap-2">
				<a href="#item1" class="btn btn-xs">
					1
				</a>
				<a href="#item2" class="btn btn-xs">
					2
				</a>
				<a href="#item3" class="btn btn-xs">
					3
				</a>
				<a href="#item4" class="btn btn-xs">
					4
				</a>
			</div>
		</>
	);
}

export default Carousel;
