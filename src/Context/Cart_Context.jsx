import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add to cart
    const addToCart = (product) => {
        const existing = cartItems.find(item => item.id === product.id);

        if (existing) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    // Remove item
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Quantity change
    const updateQty = (id, type) => {
        setCartItems(
            cartItems.map(item =>
                item.id === id
                    ? {
                        ...item,
                        qty: type === "inc" ? item.qty + 1 : item.qty - 1
                    }
                    : item
            ).filter(item => item.qty > 0)
        );
    };

    // Total price
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQty, total }}
        >
            {children}

        </CartContext.Provider>
    );
};

export default CartProvider;
