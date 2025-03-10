import { Country } from "../../types/country";

export const getCountries = async (): Promise<Country[]> => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/region/america"
        );

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
