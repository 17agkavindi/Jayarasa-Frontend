function OrderSummary({
  subtotal,
  deliveryFee,
  savings,
  estimatedTotal,
}) {
  return (
    <aside className="order-summary">

      <h2>Order summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>

        <strong>
          Rs. {subtotal.toLocaleString()}
        </strong>
      </div>

      <div className="summary-row">
        <span>Delivery estimate</span>

        <strong>
          Rs. {deliveryFee.toLocaleString()}
        </strong>
      </div>

      <div className="summary-row">
        <span>Savings</span>

        <strong>
          − Rs. {savings.toLocaleString()}
        </strong>
      </div>

      <div className="summary-divider"></div>

      <div className="total-row">
        <strong>Estimated total</strong>

        <span>
          Rs. {estimatedTotal.toLocaleString()}
        </span>
      </div>

      <p className="delivery-note">
        Final delivery fee is confirmed at checkout after your postal
        code.
      </p>

      <button className="checkout-button">
        <span>→</span>
        Proceed to checkout
      </button>

      <div className="secure-payment">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect
            x="5"
            y="10"
            width="14"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>

        <span>Your personal details are handled securely.</span>
      </div>

    </aside>
  );
}

export default OrderSummary;