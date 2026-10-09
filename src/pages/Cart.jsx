import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartContext";
import "../cart.css";

export default function Cart() {
  const { items, removeFromCart, increaseQty, decreaseQty, subtotal } = useCart();
  const navigate = useNavigate();
  const [toast, setToast] = useState("");

  const deliveryFee = items.length > 0 ? 450 : 0;
  const savings = items.length > 0 ? 70 : 0;
  const estimatedTotal = subtotal + deliveryFee - savings;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      showToast("Your cart is empty.");
      return;
    }
    showToast("Checkout coming soon!");
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="app">
      <Header />

      <main className="cart-page">
        <div className="cart-heading">
          <span className="eyebrow">YOUR ORDER</span>
          <h1>Shopping cart</h1>
          <p>
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart.
            Review package sizes before checkout.
          </p>
        </div>

        <div className="cart-layout">
          <section className="cart-box">
            <div className="cart-items">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty.</p>
                  <button
                    className="continue-shopping"
                    onClick={() => navigate("/products")}
                  >
                    ← Browse products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                    onIncrease={() => increaseQty(item.id)}
                    onDecrease={() => decreaseQty(item.id)}
                    onRemove={() => removeFromCart(item.id)}
                  />
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-bottom">
                <button
                  className="continue-shopping"
                  onClick={() => navigate("/products")}
                >
                  ← Continue shopping
                </button>
                <span className="cart-updated">Cart updated just now</span>
              </div>
            )}
          </section>

          <OrderSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            savings={savings}
            estimatedTotal={estimatedTotal}
            onCheckout={handleCheckout}
          />
        </div>
      </main>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
