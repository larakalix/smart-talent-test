import { Currency } from "@acme/ui/components";
import type { Order } from "../../../types/order";

type Props = {
    orders: Order[];
};

export const OrderGrid = ({ orders }: Props) => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="p-4 border border-gray-200 rounded-md shadow-sm"
                >
                    <h2 className="text-lg font-semibold text-gray-800">
                        Order ID: {order.id}
                    </h2>

                    <ul className="w-full flex flex-col items-start">
                        <li className="w-full flex justify-between">
                            <span className="font-semibold">Customer</span>
                            <span>
                                {order.name} ({order.email})
                            </span>
                        </li>
                        <li className="w-full flex justify-between">
                            <span className="font-semibold">Address</span>
                            <span>{order.address}</span>
                        </li>
                        <li className="w-full flex justify-between">
                            <span className="font-semibold">City</span>
                            <span>{order.country}</span>
                        </li>
                        <li className="w-full flex justify-between">
                            <span className="font-semibold">Date</span>
                            <span>{order.createdAt}</span>
                        </li>
                        <li className="w-full flex justify-between">
                            <span className="font-semibold">Products</span>
                            <ul className="mt-4 text-end">
                                {order.products.map(
                                    ({ id, name, price, tax, quantity }) => (
                                        <li key={id}>
                                            {name} -{" "}
                                            <Currency
                                                className="font-bold"
                                                price={price + tax}
                                            />{" "}
                                            (x{quantity})
                                        </li>
                                    )
                                )}
                            </ul>
                        </li>

                        <li className="mt-4 border-t pt-4 w-full flex justify-between">
                            <span className="font-semibold">Total</span>
                            <Currency price={order.total} />
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};
