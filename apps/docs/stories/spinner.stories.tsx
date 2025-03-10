import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@acme/ui/components";

const meta: Meta<typeof Spinner> = {
    component: Spinner,
    argTypes: {
        color: {
            control: { type: "color" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => <Spinner {...props} />,
    name: "Spinner",
    args: {
        color: "black",
    },
};
