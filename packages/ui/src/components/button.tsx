import type { ComponentProps, JSX, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

export function Button({ children, ...other }: ButtonProps): JSX.Element {
    return (
        <button type="button" {...other}>
            {children}
        </button>
    );
}

Button.displayName = "Button";
