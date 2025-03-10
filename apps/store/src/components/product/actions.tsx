import { useContext } from "react";
import { Button } from "@acme/ui/components";
import { ProductCardContext } from "../../providers/product-card-provider";
import { useProductCard } from "./hooks/use-product-card";
import { Product } from "../../types/product";

export const ProductCardActions = () => {
    const { product } = useContext(ProductCardContext);
    const { allowPurchase, handleAddToCart } = useProductCard();

    return (
        <>
            {/* In case has more actions/complexity */}
            {allowPurchase && (
                <div>
                    <dd className="mt-8">
                        <Button
                            className="block rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
                            onClick={() => handleAddToCart(product as Product)}
                        >
                            Add to cart
                        </Button>
                    </dd>
                </div>
            )}
        </>
    );
};
