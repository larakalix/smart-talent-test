import { Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <section className="flex flex-col h-screen">
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </section>
    );
};
