import { MOCK_PRODUCTS } from "../../data/products";
import { Product } from "../../types/product";

export const getProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_PRODUCTS as Product[]);
        }, 1000);
    });
};
