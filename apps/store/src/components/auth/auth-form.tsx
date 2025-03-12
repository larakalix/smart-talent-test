import { Button } from "@acme/ui/components";
import { useAuthForm } from "./hooks/use-auth-form";

export const AuthForm = () => {
    const { adminAuth, clientAuth } = useAuthForm();

    return (
        <ul className="flex flex-wrap gap-4">
            <li>
                <span>Login as ADMIN</span>
                <Button
                    className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                    onClick={adminAuth}
                >
                    Login as ADMIN
                </Button>
            </li>
            <li>
                <span>Login as CLIENT</span>
                <Button
                    className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                    onClick={() => clientAuth("1")}
                >
                    Login as CLIENT #1
                </Button>
            </li>
            <li>
                <span>Login as CLIENT</span>
                <Button
                    className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                    onClick={() => clientAuth("2")}
                >
                    Login as CLIENT #2
                </Button>
            </li>
            <li>
                <span>Login as CLIENT</span>
                <Button
                    className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                    onClick={() => clientAuth("3")}
                >
                    Login as CLIENT #3
                </Button>
            </li>
            <li>
                <span>Login as CLIENT</span>
                <Button
                    className="block w-full rounded-sm bg-violet-400 p-4 text-sm font-medium transition hover:bg-violet-500"
                    onClick={() => clientAuth("4")}
                >
                    Login as CLIENT #4
                </Button>
            </li>
        </ul>
    );
};
