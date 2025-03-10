import { useContext } from "react";
import { ProductCardContext } from "../../../providers/product-card-provider";
import { Currency } from "@acme/ui/components";
import type { Product } from "../../../types/product";

export const ProductCartInfo = () => {
    const { product } = useContext(ProductCardContext) as {
        product: Product;
    };

    return (
        <>
            <div>
                <dt className="sr-only">Price</dt>
                <Currency
                    className="text-sm text-gray-500"
                    price={product.price}
                />
            </div>

            <div>
                <dd className="font-medium">{product.name}</dd>
            </div>

            <div>
                <dd className="text-xs font-medium">Stock: {product.stock}</dd>
            </div>
        </>
    );
};
