import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    const [toastMsg, setToastMsg] = useState("");

    // 🔢 Auto cart count
    const cartCount = cartItems.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    // 💾 Save cart to localStorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // ✅ Add to cart (FINAL FIX)
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                setToastMsg("Item already exists ❌");
                setTimeout(() => setToastMsg(""), 2000);
                return prev;
            }

            setToastMsg("Item added to cart ✅");
            setTimeout(() => setToastMsg(""), 2000);

            return [...prev, { ...product, qty: 1 }];
        });
    };

    // ❌ Remove from cart
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
        setToastMsg("Item removed from cart ❌");
        setTimeout(() => setToastMsg(""), 2000);
    };

    // ➕ ➖ Update quantity
    const updateQty = (id, type) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? {
                            ...item,
                            qty: type === "inc" ? item.qty + 1 : item.qty - 1
                        }
                        : item
                )
                .filter(item => item.qty > 0)
        );
    };

    // 💰 Total amount
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
