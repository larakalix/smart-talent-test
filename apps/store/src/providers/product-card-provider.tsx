import { createContext } from "react";
import type { CartProduct, Product } from "../types/product";

interface ProductCardContextProps {
    product: Product | CartProduct;
}

const ProductCardContext = createContext<ProductCardContextProps>(
    {} as ProductCardContextProps
);

const ProductCardProvider = ProductCardContext.Provider;

export { ProductCardContext, ProductCardProvider };
