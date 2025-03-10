import type { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export function Input(props: InputProps): JSX.Element {
    return (
        <input
            {...props}
            className="mt-1 w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
        />
    );
}

Input.displayName = "Input";
