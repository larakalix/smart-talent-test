import { NavLink } from "react-router-dom";
import { Container } from "../container";
import { Cart } from "../../cart/cart";
import { Logo } from "../logo";
import { Button } from "@acme/ui/components";
import { useHeader } from "./hooks/use-header";

export const Header = () => {
    const { user, routes, handleLogout } = useHeader();

    return (
        <header className="bg-white">
            <Container className="p-6">
                <NavLink className="block" to="/">
                    <span className="sr-only">Home</span>
                    <Logo />
                </NavLink>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {routes.map((route) => (
                                <li key={route.id}>
                                    <NavLink
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        to={route.path}
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Cart />

                        <div className="sm:flex sm:gap-4">
                            <NavLink
                                className="block rounded-md bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-700"
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </div>

                        {user && (
                            <Button
                                className="block rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        )}

                        <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
