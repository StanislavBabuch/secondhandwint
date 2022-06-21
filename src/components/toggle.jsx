import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

export const Toggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	function isDark() {
		return theme === "dark";
	}

	function toggleTheme(e) {
		setTheme(e.target.checked ? "dark" : "light");
	}

	return (
		<div class="flex justify-center">
			<div>
				<div class="form-check form-switch mb-7">
					<input
						class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
						type="checkbox"
						role="switch"
						id="flexSwitchCheckDefault56"
						checked={isDark()}
						onChange={(e) => toggleTheme(e)}
					/>
				</div>
			</div>
		</div>
	);
};
