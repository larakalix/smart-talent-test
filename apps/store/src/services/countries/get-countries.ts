import { Country } from "../../types/country";

const COUNTRY_API_URL = import.meta.env.VITE_COUNTRY_API_URL;

export const getCountries = async (): Promise<Country[]> => {
    try {
        const response = await fetch(`${COUNTRY_API_URL}region/america`);

        if (!response.ok) {
            throw new Error("Failed to fetch countries");
        }

        const countries = (await response.json()) as Country[];

        return countries;
    } catch (error) {
        console.error(error);
        return [];
    }
};
