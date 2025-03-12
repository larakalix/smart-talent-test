import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import { HomePage } from "../pages/client/home/home-page";
import { ProtectedRoute } from "../components/layout/protected-route";
import { OrdersPage } from "../pages/admin/orders-page";
import { CartPage } from "../pages/client/cart-page";
import { CheckoutPage } from "../pages/client/checkout-page";
import { AuthPage } from "../pages/auth/auth-page";
import { UserOrderPage } from "../pages/client/orders/user-order-page";

export const RouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/login" element={<AuthPage />} />

                    {/* Client pages */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute requiredRole="user">
                                <HomePage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute requiredRole="user">
                                <CartPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/checkout"
                        element={
                            <ProtectedRoute requiredRole="user">
                                <CheckoutPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/my-orders"
                        element={
                            <ProtectedRoute requiredRole="user">
                                <UserOrderPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Admin pages */}
                    <Route
                        path="/orders"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <OrdersPage />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
