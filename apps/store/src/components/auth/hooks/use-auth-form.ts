import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/auth-store";
import { User } from "../../../types/user";
import { toast } from "sonner";

export const useAuthForm = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore((state) => state);

    const fakeUsers = new Map<string, User>([
        [
            "1",
            {
                id: "1",
                role: "user",
                email: "user@testmail.com",
                name: "User",
                phone: "1234567890",
            },
        ],
        [
            "2",
            {
                id: "2",
                role: "user",
                email: "jdoe@testmail.com",
                name: "John Doe",
                phone: "1234567890",
            },
        ],
        [
            "3",
            {
                id: "3",
                role: "user",
                email: "lcanseco@testmail.com",
                name: "Luis Canseco",
                phone: "1234567890",
            },
        ],
    ]);

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

    const clientAuth = (id: string) => {
        const user = fakeUsers.get(id);

        if (!user) {
            toast.error("User not found");
            return;
        }

        const { name, email, phone } = user;

        login({
            id,
            role: "user",
            email,
            name,
            phone,
        });

        navigate("/");
    };

    return { adminAuth, clientAuth };
};
