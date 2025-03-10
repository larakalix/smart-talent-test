import { LoadProvider } from "../../../providers/load-provider";
import { useOrderForm } from "./hooks/use-order-form";

export const OrderForm = () => {
    const { countries, isLoading, error } = useOrderForm();

    return (
        <LoadProvider isLoading={isLoading} error={error}>
            <form>
                <pre>{JSON.stringify(countries, null, 2)}</pre>
            </form>
        </LoadProvider>
    );
};
