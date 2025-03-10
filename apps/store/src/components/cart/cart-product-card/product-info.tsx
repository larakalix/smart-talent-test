import { useContext } from "react";
import { ProductCardContext } from "../../../providers/product-card-provider";
import { Currency } from "@acme/ui/components";
import { CartProduct } from "../../../types/product";

export const ProductInfo = () => {
    const { product } = useContext(ProductCardContext) as {
        product: CartProduct;
    };

    return (
        <div>
            <h3 className="text-sm text-gray-900">
                {product.name} ({product.quantity})
            </h3>

            <dl className="mt-0.5 space-y-px text-base text-gray-600">
                <div>
                    <dd className="inline">
                        <Currency price={product.price} />
                    </dd>
                </div>
            </dl>
        </div>
    );
};
