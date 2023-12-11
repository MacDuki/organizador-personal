import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
					setItem(parsedItem);
				}
				console.log("Se ejecuta efecto");
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		}, 2000);
	}, []);

	const saveLocalStorage = (uptdatedItems) => {
		localStorage.setItem(itemName, JSON.stringify(uptdatedItems));
		setItem(uptdatedItems);
	};

	return { item, saveLocalStorage, error, loading };
}

export { useLocalStorage };
