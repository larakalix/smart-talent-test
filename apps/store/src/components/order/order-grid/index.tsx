import { useOrderStore } from "../../../stores/order-store";

export const OrderGrid = () => {
    const { orders } = useOrderStore((state) => state);

    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="p-4 border border-gray-200 rounded-md shadow-sm"
                >
                    <h2 className="text-lg font-semibold text-gray-800">
                        Order ID: {order.id} - {order.name} ({order.email})
                    </h2>
                    <p className="text-gray-600">Total: {order.total}</p>
                    <p className="text-gray-600">
                        Created At: {order.createdAt}
                    </p>

                    <ul className="mt-4">
                        {order.products.map((product) => (
                            <li key={product.id}>
                                {product.name} - {product.price}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
