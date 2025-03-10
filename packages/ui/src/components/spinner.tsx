import type { ComponentProps } from "react";

type Props = ComponentProps<"span"> & {
    color: string;
};

export const Spinner = ({ color }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50"
            height="50"
        >
            <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke={color}
                strokeWidth="5"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="1s"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
};
