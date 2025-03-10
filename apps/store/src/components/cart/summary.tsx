import React from "react";
import { useCartStore } from "../../stores/cart-store";
import { Currency } from "@acme/ui/components";
import { NavLink } from "react-router-dom";

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

                <div className="flex justify-end">
                    <NavLink
                        to="/checkout"
                        className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                        Checkout
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
