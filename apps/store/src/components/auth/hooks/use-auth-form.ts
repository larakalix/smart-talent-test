import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/auth-store";

export const useAuthForm = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore((state) => state);

    const adminAuth = () => {
        login({
            id: "4",
            role: "admin",
            email: "admin@testmail.com",
            name: "Admin",
            phone: "1234567890",
        });

        navigate("/orders");
    };

    const clientAuth = () => {
        login({
            id: "1",
            role: "user",
            email: "user@testmail.com",
            name: "User",
            phone: "1234567890",
        });

        navigate("/");
    };

    return { adminAuth, clientAuth };
};
