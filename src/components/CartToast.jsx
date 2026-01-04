import { useContext } from "react";
import { CartContext } from "../Context/Cart_Context";

function CartToast() {
    const { toastMsg } = useContext(CartContext);

    if (!toastMsg) return null;

    return (
        <div
            className="position-fixed bottom-0 start-50 translate-middle-x p-3 text-center"
            style={{ zIndex: 9999 }}
        >
            <div className="toast show bg-dark text-white">
                <div className="toast-body">
                    <h4 className="m-0">{toastMsg}</h4>
                </div>
            </div>
        </div>
    );
}

export default CartToast;