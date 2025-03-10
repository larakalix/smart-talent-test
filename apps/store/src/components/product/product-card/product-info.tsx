import { useContext } from "react";
import { ProductCardContext } from "../../../providers/product-card-provider";
import { Currency } from "@acme/ui/components";

export const ProductCartInfo = () => {
    const { product } = useContext(ProductCardContext);

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
        </>
    );
};
