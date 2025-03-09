import { Container } from "./container";
import { Logo } from "./logo";

export const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <Container className="p-6">
                <div className="sm:flex sm:items-center sm:justify-between w-full">
                    <div className="flex justify-center text-teal-600 items-center font-bold">
                        <Logo /> Store
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; {new Date().getFullYear()}. All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
