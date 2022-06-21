import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(`https://fakestoreapi.com/`);
			setUsers(data);
		}
		fetchData();
	}, []);
	return (
		<APIContext.Provider
			value={{
				users,
			}}
		>
			{children}
		</APIContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error("Context must be used within a Provider");
	}
	return context;
}
