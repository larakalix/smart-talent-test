import type { ComponentProps, JSX } from "react";
import { cn } from "../lib/utils";

export type CardProps = ComponentProps<"div"> & {
    children?: React.ReactNode;
};

export function Card({ className, children }: CardProps): JSX.Element {
    return (
        <div
            className={cn(
                "block rounded-lg p-4 shadow-xs shadow-indigo-100",
                className
            )}
        >
            {children}
        </div>
    );
}
