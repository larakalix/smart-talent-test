import type { Product } from "../../types/product";
import { Card } from "@acme/ui/components";
import { ProductCardProvider } from "../../providers/product-card-provider";
import { ProductCartInfo } from "./product-info";
import { ProductCardActions } from "./actions";

type Props = {
    product: Product;
};

export const ProductCard = ({ product }: Props) => {
    return (
        <ProductCardProvider value={{ product }}>
            <Card className="block rounded-lg p-4 shadow-xs shadow-indigo-100">
                <dl>
                    <ProductCartInfo />

                    <ProductCardActions />
                </dl>
            </Card>
        </ProductCardProvider>
    );
};
