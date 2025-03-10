import { use } from "react";
import { useProductStore } from "../../../../stores/product-store";
import { getProducts } from "../../../../services/products/get-products";

export const useHome = () => {
    const products = use(getProducts());

    useProductStore.setState({
        products,
    });

    return {};
};
