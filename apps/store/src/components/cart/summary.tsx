import { useCartStore } from "../../stores/cart-store";
import { Currency } from "@acme/ui/components";

export const CartSummary = () => {
    const { getSummary } = useCartStore((state) => state);

    const { total, totalTaxes } = getSummary();

    return (
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>
                            <Currency price={total} />
                        </dd>
                    </div>

                    <div className="flex justify-between">
                        <dt>Tax</dt>
                        <dd>
                            <Currency price={totalTaxes} />
                        </dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>
                            <Currency price={total + totalTaxes} />
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};
