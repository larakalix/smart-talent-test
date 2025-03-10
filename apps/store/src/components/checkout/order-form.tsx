"use client";

import { use } from "react";
import { getCountries } from "../../services/countries/get-countries";

export const OrderForm = () => {
    const data = use(getCountries());

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};
