import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getCountries } from "../../../../services/countries/get-countries";

export const useOrderForm = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-countries"],
        queryFn: getCountries,
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });

    const countries = data
        ?.map((country) => ({
            label: country.name.common,
            value: country.cca2,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

    return {
        countries,
        error,
        isLoading,
    };
};
