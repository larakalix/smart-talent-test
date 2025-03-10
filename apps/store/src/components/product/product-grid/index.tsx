import { useProductGrid } from "./hooks/use-product-grid";
import { ProductCard } from "../product-card";
import { LoadProvider } from "../../../providers/load-provider";

export const ProductGrid = () => {
    const { products, isLoading, error } = useProductGrid();

    return (
        <LoadProvider isLoading={isLoading} error={error}>
            <div className="grid grid-cols-4 gap-4 w-full">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </LoadProvider>
    );
};
