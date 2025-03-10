import type { ComponentProps } from "react";

type Props = ComponentProps<"span"> & {
    price: number;
    currency?: string | undefined;
};

export function Currency({
    currency = "USD",
    className,
    price,
}: Props): React.ReactNode {
    return (
        <span className={className}>
            {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency,
            }).format(price)}
        </span>
    );
}
