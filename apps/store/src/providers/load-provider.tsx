import { PropsWithChildren } from "react";
import { ErrorAlert } from "../components/common/error-alert";

type Props = PropsWithChildren<{
    isLoading: boolean;
    error: Error | null;
}>;

export const LoadProvider = ({ error, isLoading, children }: Props) => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <ErrorAlert message={error.message} />;

    return <>{children}</>;
};
