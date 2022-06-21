function Menu({ children, avatar }) {
	return (
		<>
			<div class="border border-gray-200 rounded-md p-4 block bg-white  sm:visible phone:invisible">
				<div class="block">
					<div class="text-center py-1 border-b border-gray-100 truncate">
						<a
							href="#"
							class="cursor-pointer text-gray-500 text-sm hover:text-gray-700"
						>
							Friend{" "}
						</a>
					</div>

					<div class="text-center py-1 border-b border-gray-100 truncate">
						<a
							href="#"
							class="cursor-pointer text-gray-500 text-sm hover:text-gray-700"
						>
							Photo{" "}
						</a>
					</div>

					<div class="text-center py-1 border-b border-gray-100 truncate">
						<a
							href="#"
							class="cursor-pointer text-gray-500 text-sm hover:text-gray-700"
						>
							Comunity{" "}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
