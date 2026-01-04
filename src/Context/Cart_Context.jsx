import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    const [toastMsg, setToastMsg] = useState("");

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // ✅ Add to cart
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });

        // 🔔 Toast message trigger
        setToastMsg("Item added to cart ✅");

        // auto hide after 2 sec
        setTimeout(() => setToastMsg(""), 2000);
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQty = (id, type) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            qty: type === "inc" ? item.qty + 1 : item.qty - 1,
                        }
                        : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQty,
                total,
                toastMsg,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
