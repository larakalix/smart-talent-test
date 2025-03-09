import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout";
import { HomePage } from "../pages/common/home/home-page";
import { ProtectedRoute } from "../components/layout/protected-route";
import { OrdersPage } from "../pages/admin/orders-page";
import { OrdeDetailPage } from "../pages/admin/order-detail-page";
import { CartPage } from "../pages/client/cart-page";
import { CheckoutPage } from "../pages/client/checkout-page";
import { AuthPage } from "../pages/auth/auth-page";

export const RouteProvider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {/* <Route path="/" element={<HomePage />} /> */}
                    <Route path="/login" element={<AuthPage />} />
                    {/* <Route path="/product/:id" element={<div>Product</div>} /> */}

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

                    {/* Admin pages */}
                    <Route
                        path="/orders"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <OrdersPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/orders/:id"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <OrdeDetailPage />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
