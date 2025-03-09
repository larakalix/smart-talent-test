import type { Product } from "../../types/product";
import { Button, Card } from "@acme/ui/components";
import { useProductCard } from "./hooks/use-product-card";

type Props = {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    const { allowPurchase, handleAddToCart } = useProductCard({ product });

    return (
        <Card className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
            <dl>
                <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-gray-500">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(product.price)}
                    </dd>
                </div>

                <div>
                    <dd className="font-medium">{product.name}</dd>
                </div>

                {allowPurchase && (
                    <div>
                        <dd className="mt-8">
                            <Button
                                className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to cart
                            </Button>
                        </dd>
                    </div>
                )}
            </dl>
        </Card>
    );
};
