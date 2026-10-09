function CartItem({ product, onIncrease, onDecrease, onRemove }) {
  const quantity = product.quantity || 1;

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>

        <p className="package">
          Package: {product.package}
        </p>

        <div className="item-links">
          <button className="remove-button" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>

      <div className="product-price">
        Rs. {(product.price * quantity).toLocaleString()}
      </div>

      <div className="quantity-control">
        <button onClick={onDecrease}>−</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
