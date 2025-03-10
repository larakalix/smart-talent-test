import type { Meta, StoryObj } from "@storybook/react";
import { Currency } from "@acme/ui/components";

const meta: Meta<typeof Currency> = {
    component: Currency,
    argTypes: {
        currency: {
            control: { type: "radio" },
            options: ["USD", "EUR", "JPY"],
        },
        price: {
            control: { type: "number" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Currency>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => <Currency {...props} />,
    name: "Currency",
    args: {
        currency: "USD",
        price: 100,
    },
};
