import { CartProduct } from "../../../types/product";
import { ProductCardProvider } from "../../../providers/product-card-provider";
import { ProductInfo } from "./product-info";
import { CartProductCardActions } from "./actions";

type Props = {
    product: CartProduct;
};

export const CartProductCard = ({ product }: Props) => {
    return (
        <ProductCardProvider value={{ product }}>
            <li className="flex items-center gap-4">
                <ProductInfo />

                <CartProductCardActions />
            </li>
        </ProductCardProvider>
    );
};
