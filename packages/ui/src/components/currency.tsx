import type { ComponentProps, JSX } from "react";

type Props = ComponentProps<"span"> & {
    price: number;
    currency?: string | undefined;
};

export function Currency({
    currency = "USD",
    className,
    price,
}: Props): JSX.Element {
    return (
        <span className={className}>
            {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency,
            }).format(price)}
        </span>
    );
}
