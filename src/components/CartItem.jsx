function CartItem({
  product,
  onIncrease,
  onDecrease,
  isLast,
}) {
  const quantity = product.quantity || 1;

  return (
    <div className={`cart-item ${isLast ? "last-item" : ""}`}>

      {/* PRODUCT IMAGE */}
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="product-info">

        <h2>{product.name}</h2>

        <p className="package">
          Package: {product.package}
          <button>Change</button>
        </p>

        <div className="item-links">
          <button className="save-button">
            Save for later
          </button>

          <button className="remove-button">
            Remove
          </button>
        </div>

      </div>

      {/* PRICE */}
      <div className="product-price">
        Rs. {(product.price * quantity).toLocaleString()}
      </div>

      {/* QUANTITY */}
      <div className="quantity-control">

        <button onClick={onDecrease}>
          −
        </button>

        <span>{quantity}</span>

        <button onClick={onIncrease}>
          +
        </button>

      </div>

    </div>
  );
}

export default CartItem;