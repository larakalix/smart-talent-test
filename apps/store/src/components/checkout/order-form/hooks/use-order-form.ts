import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../../../services/countries/get-countries";
import { useAuthStore } from "../../../../stores/auth-store";

export const useOrderForm = () => {
    const { user } = useAuthStore((state) => state);

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

    const onSubmit = async <T extends Record<string, any>>(data: T) => {};

    return {
        user,
        countries,
        error,
        isLoading,
        onSubmit,
    };
};
