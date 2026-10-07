import { useState } from "react";
import Header from "./components/Header";
import CartItem from "./components/CartItem";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Spicy Roasted Cashews",
    package: "100g",
    price: 1120,
    image: "/products/Item image.png",
  },
  {
    id: 2,
    name: "Green Pistachios",
    package: "500g",
    price: 7850,
    image: "/products/Item image (1).png",
  },
  {
    id: 3,
    name: "Seedless Raisins",
    package: "1kg",
    price: 3650,
    image: "/products/Item image (2).png",
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const increaseQuantity = (id) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max((product.quantity || 1) - 1, 1),
            }
          : product
      )
    );
  };

  const subtotal = products.reduce(
    (total, product) =>
      total + product.price * (product.quantity || 1),
    0
  );

  const deliveryFee = 450;
  const savings = 70;
  const estimatedTotal = subtotal + deliveryFee - savings;

  return (
    <div className="app">
      <Header />

      <main className="cart-page">
        <div className="cart-heading">
          <span className="eyebrow">YOUR ORDER</span>

          <h1>Shopping cart</h1>

          <p>
            {products.length} items reserved for a short time. Review package
            sizes before checkout.
          </p>
        </div>

        <div className="cart-layout">
          {/* LEFT SIDE */}
          <section className="cart-box">
            <div className="cart-items">
              {products.map((product, index) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
                  isLast={index === products.length - 1}
                />
              ))}
            </div>

            <div className="cart-bottom">
              <button className="continue-shopping">
                ← Continue shopping
              </button>

              <span className="cart-updated">
                Cart updated just now
              </span>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <OrderSummary
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            savings={savings}
            estimatedTotal={estimatedTotal}
          />
        </div>
      </main>
    </div>
  );
}

export default App;