import { useAuthStore } from "../../stores/auth-store";

export const StoreGreeting = () => {
    const { user } = useAuthStore((state) => state);

    if (!user) {
        return null;
    }

    return (
        <div className="flex w-full p-4">
            <div className="rounded-lg bg-green-600 px-4 py-3 text-white">
                <p className="text-center text-sm font-medium">
                    Welcome, {user.name}
                </p>
            </div>
        </div>
    );
};
