import { useContext } from "react";
import { Button } from "@acme/ui/components";
import { ProductCardContext } from "../../../providers/product-card-provider";
import { useProductCard } from "./hooks/use-product-card";
import { Product } from "../../../types/product";
import { cn } from "@acme/ui/utils";

export const ProductCardActions = () => {
    const { product } = useContext(ProductCardContext) as { product: Product };
    const { allowPurchase, cartHasProduct, handleAddToCart } = useProductCard();

    const disabled = cartHasProduct(product.id, product.stock);

    return (
        <>
            {/* In case has more actions/complexity */}
            {allowPurchase && (
                <div>
                    <dd className="mt-8">
                        <Button
                            disabled={disabled}
                            className={cn(
                                "block rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600",
                                {
                                    "cursor-not-allowed bg-violet-300 hover:bg-violet-400": disabled,
                                }
                            )}
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
