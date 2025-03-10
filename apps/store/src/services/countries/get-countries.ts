export const getCountries = async () => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/region/america"
        );
        const countries = await response.json();

        return countries;
    } catch (error) {
        console.error(error);
        return [];
    }
};
