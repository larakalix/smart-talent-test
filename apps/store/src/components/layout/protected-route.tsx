import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth-store";

type Props = {
    children: React.ReactNode;
    requiredRole: "user" | "admin";
};

export const ProtectedRoute = ({ children, requiredRole }: Props) => {
    const { user } = useAuthStore();

    if (user?.role !== requiredRole) {
        return <Navigate to="/login" />;
    }

    return children;
};
