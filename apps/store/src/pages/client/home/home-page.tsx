import { StoreGreeting } from "../../../components/home/home-greet";
import { Container } from "../../../components/layout/container";
import { ProductGrid } from "../../../components/product/product-grid";

export const HomePage = () => {
    return (
        <Container className="p-6 flex flex-col">
            <StoreGreeting />

            <ProductGrid />
        </Container>
    );
};
