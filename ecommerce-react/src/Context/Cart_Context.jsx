import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cart_count = localStorage.getItem("cartCount")
    const [cartCount, setCartCount] = useState(cart_count ? parseInt(cart_count) : 0);
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    const [toastMsg, setToastMsg] = useState("");

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("cartCount", JSON.stringify(cartCount));
    }, [cartItems, cartCount]);

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

                return () => {
                    window.alert("Item is already in the cart");
                    return [...prev];
                }
            }

            return [...prev, { ...product, qty: 1 }];
        });

        setCartCount((prevCount) => prevCount + 1);
        // 🔔 Toast message trigger
        setToastMsg("Item added to cart ✅");

        // auto hide after 2 sec
        setTimeout(() => setToastMsg(""), 2000);
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        setCartCount((prevCount) => prevCount - 1);
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
        setCartCount((prevCount) =>
            type === "inc" ? prevCount + 1 : prevCount - 1
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
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;