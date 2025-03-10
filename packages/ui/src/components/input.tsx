import type { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export function Input(props: InputProps): JSX.Element {
    return <input {...props} />;
}

Input.displayName = "Input";
