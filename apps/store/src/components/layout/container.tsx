import type { PropsWithChildren } from "react";
import { cn } from "@acme/ui/utils";

type Props = PropsWithChildren<{
    className?: string;
}>;

export const Container = ({ className, children }: Props) => {
    return (
        <div
            className={cn(
                "mx-auto flex max-w-screen-xl items-center gap-8",
                className
            )}
        >
            {children}
        </div>
    );
};
