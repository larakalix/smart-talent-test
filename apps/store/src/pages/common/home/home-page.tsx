import { StoreGreeting } from "../../../components/home/home-greet";
import { Container } from "../../../components/layout/container";
import { ProductCard } from "../../../components/product/product-card";
import { useProductStore } from "../../../stores/product-store";

export const HomePage = () => {
    const { products } = useProductStore((state) => state);

    return (
        <Container className="p-6 flex flex-col">
            <StoreGreeting />

            <div className="grid grid-cols-4 gap-4 w-full">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Container>
    );
};
