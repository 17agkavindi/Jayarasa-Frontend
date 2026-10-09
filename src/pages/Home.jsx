import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserRound,
  ShoppingCart,
  Menu,
  X,
  Heart,
  CheckCircle2,
  Truck,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const categories = [
  {
    title: "Nuts",
    text: "Cashews, almonds, peanuts & more",
    image: "/images/nuts.png",
  },
  {
    title: "Spices",
    text: "Everyday aroma for every kitchen",
    image: "/images/spices.png",
  },
  {
    title: "Dried Fruits",
    text: "Naturally sweet pantry staples",
    image: "/images/dryfruits.png",
  },
  {
    title: "Cake Essentials",
    text: "For bakers, makers & celebrations",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Spicy Roasted Cashews",
    category: "NUTS · BESTSELLER",
    price: 620,
    priceLabel: "Rs. 620",
    stock: "In stock",
    image: "/images/devilledcashew.png",
    package: "100g",
  },
  {
    id: 2,
    name: "Raw Almonds",
    category: "NUTS",
    price: 740,
    priceLabel: "Rs. 740",
    stock: "In stock",
    image: "/images/almonds.png",
    package: "100g",
  },
  {
    id: 3,
    name: "Green Pistachios",
    category: "NUTS",
    price: 890,
    priceLabel: "Rs. 890",
    stock: "Only 8 packs left",
    image: "/images/pistachios.png",
    package: "100g",
  },
  {
    id: 4,
    name: "Seedless Raisins",
    category: "DRIED FRUITS",
    price: 380,
    priceLabel: "Rs. 380",
    stock: "In stock",
    image: "/images/dryfruits.png",
    package: "100g",
  },
];

const faqs = [
  {
    q: "How long does islandwide delivery take?",
    a: "Most orders arrive within 2–4 working days depending on the delivery location.",
  },
  {
    q: "Can I order through WhatsApp?",
    a: "Yes. Customers can send their product list and delivery details to the business WhatsApp number.",
  },
  {
    q: "How do I pay by bank transfer?",
    a: "After the order is confirmed, the backend/order team can provide the required bank details.",
  },
  {
    q: "What if a product is out of stock?",
    a: "The team can suggest a similar product or notify the customer when the item is available again.",
  },
];

function Home() {
  const { addToCart, cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [toast, setToast] = useState("");
  const [selectedSize, setSelectedSize] = useState("100g");

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(""), 2200);
  };

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id]
    );
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setToast("Thanks for subscribing! ✓");
    setTimeout(() => setToast(""), 2200);
    e.target.reset();
  };

  return (
    <div className="app">
      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>🇱🇰 Packed fresh in Sri Lanka</span>
          <div className="top-links">
            <Link to="/products">Shop</Link>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="brand" style={{ textDecoration: "none" }}>
            <span className="brand-mark">JE</span>
            <span>
              <strong>Jayarasa</strong>
              <small>Mix &amp; Nut</small>
            </span>
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Shop all</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Nuts</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Spices</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Dried fruits</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Cake ingredients</Link>
            <a href="#bulk" onClick={() => setMenuOpen(false)}>Bulk &amp; shop orders</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>Help</a>
          </nav>

          <div className="nav-actions">
            <button type="button">
              <UserRound size={14} /> Account
            </button>
            <Link to="/cart" className="cart-button" style={{ textDecoration: "none" }}>
              <ShoppingCart size={14} /> Cart ({cartCount})
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="container hero-copy-inner">
              <p className="eyebrow">Packed fresh in Sri Lanka</p>
              <h1>
                Pantry goodness,
                <br />
                packed with care.
              </h1>
              <p className="hero-description">
                Premium nuts, fragrant spices, dried fruits and baking
                essentials—freshly packed for your home, café or shop.
              </p>

              <div className="hero-buttons">
                <Link to="/products" className="btn primary-btn">
                  Shop favourites <ArrowRight size={13} />
                </Link>
                <a href="#categories" className="btn light-btn">
                  Explore pantry
                </a>
              </div>

              <p className="hero-note">
                ✓ Choose 50g sizes to keep value packs on most products.
              </p>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src="/images/main.jpg" alt="Jayarasa nuts and pantry products" />
            <div className="hero-product-card">
              <span>THIS WEEK'S FAVOURITE</span>
              <strong>Spicy Cashews</strong>
              <small>100g · Rs. 1,120</small>
            </div>
          </div>
        </section>

        {/* SERVICE STRIP */}
        <section className="service-strip">
          <div className="container service-grid">
            <Service icon={<CheckCircle2 />} title="Packed fresh" text="Food-safe sealed packs" />
            <Service icon={<Truck />} title="Islandwide delivery" text="2–4 working days" />
            <Service icon={<BadgeCheck />} title="Quality checked" text="Sourced with care" />
            <Service icon={<MessageCircle />} title="Human support" text="WhatsApp or call us" />
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="section categories-section" id="categories">
          <div className="container">
            <p className="eyebrow">Explore the pantry</p>
            <div className="heading-row">
              <div>
                <h2>Find your everyday favourites</h2>
                <p>Carefully sourced, hygienically packed and ready for kitchens of every size.</p>
              </div>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <Link to="/products" className="category-card" key={category.title}>
                  <img src={category.image} alt={category.title} />
                  <div className="image-gradient" />
                  <div className="category-content">
                    <span>SHOP CATEGORY</span>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="section products-section" id="shop">
          <div className="container">
            <p className="eyebrow">Most loved</p>
            <div className="heading-row">
              <div>
                <h2>Bestsellers, packed fresh</h2>
                <p>Popular choices for snacking, gifting and everyday cooking.</p>
              </div>
              <Link to="/products" className="outline-btn">
                View all products <ArrowRight size={12} />
              </Link>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <span className={product.stock.includes("Only") ? "stock low" : "stock"}>
                      {product.stock}
                    </span>
                    <button
                      className="heart-button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={`Wishlist ${product.name}`}
                    >
                      <Heart
                        size={15}
                        fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                      />
                    </button>
                    <img src={product.image} alt={product.name} />
                  </div>

                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="price">
                    from <strong>{product.priceLabel}</strong>
                  </p>

                  <button className="add-cart" onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PACK SIZES */}
        <section className="section pack-section" id="about">
          <div className="container pack-grid">
            <div className="pack-image">
              <img src="/images/pantryview.png" alt="Jayarasa pantry packs" />
            </div>

            <div className="pack-copy">
              <p className="eyebrow">A size for every pantry</p>
              <h2>
                Taste a little.
                <br />
                Stock up a lot.
              </h2>
              <p>
                Start with a 50g pack, refill the family pantry with 500g, or choose
                value-friendly 1kg packs for cafés, bakeries and neighbourhood shops.
              </p>

              <div className="size-pills">
                {["50g", "100g", "500g", "1kg"].map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "active" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <Link to="/products" className="btn primary-btn">
                Browse all package sizes <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* BULK */}
        <section className="bulk-section" id="bulk">
          <div className="container bulk-grid">
            <div className="bulk-card">
              <p>FOR YOUR HOME</p>
              <h3>Flexible small packs</h3>
              <span>
                Mix favourites in one order. Simple islandwide delivery and cash on
                delivery available.
              </span>
              <Link to="/products">Home shopping →</Link>
            </div>

            <div className="bulk-card">
              <p>FOR YOUR SHOP</p>
              <h3>Reliable bulk supply</h3>
              <span>
                Order practical 500g and 1kg packs with consistent quality and a
                clear order history.
              </span>
              <a href="#contact">Shop orders →</a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section how-section">
          <div className="container">
            <p className="eyebrow">Simple from shelf to door</p>
            <h2>How ordering works</h2>

            <div className="steps-grid">
              <Step number="01" title="Choose your favourites">
                Pick a product and the pack size that suits you.
              </Step>
              <Step number="02" title="Confirm delivery">
                Add Sri Lankan delivery address and phone number.
              </Step>
              <Step number="03" title="Pay your way">
                Select cash on delivery or secure bank transfer.
              </Step>
              <Step number="04" title="We pack & dispatch">
                Track every step from processing to delivery.
              </Step>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews-section">
          <div className="container">
            <p className="eyebrow">Trusted islandwide</p>
            <h2>Good food, good word</h2>

            <div className="reviews-grid">
              <Review
                text="The cashews arrive crisp every time. The 500g packs are perfect for our café."
                author="Amalika · Café owner, Kandy"
              />
              <Review
                text="Great pack sizes and quick WhatsApp support made my first order so easy."
                author="Shanali · Home baker, Matara"
              />
              <Review
                text="I could track the parcel from processing to dispatch. Excellent care."
                author="Fazil · Galle"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Need to know</p>
              <h2>A few helpful answers</h2>
              <p className="faq-intro">
                More questions? Our team is happy to help on WhatsApp.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div className="faq-item" key={faq.q}>
                    <button
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="faq-question"
                    >
                      <span>{faq.q}</span>
                      {open ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                    {open && <p className="faq-answer">{faq.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <div className="container newsletter-inner">
            <div>
              <h2>Fresh arrivals, pantry notes &amp; offers</h2>
              <p>One thoughtful email and no clutter.</p>
            </div>

            <form onSubmit={handleNewsletter}>
              <input type="email" placeholder="Email address" required />
              <button type="submit">Join the list</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact">
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" to="/" style={{ textDecoration: "none" }}>
              <span className="brand-mark">JE</span>
              <span>
                <strong>Jayarasa</strong>
                <small>Mix &amp; Nut</small>
              </span>
            </Link>
            <p>
              Premium pantry essentials packed fresh in Sri Lanka for homes, bakeries
              and neighbourhood shops.
            </p>
            <small>Reg No.: W47907</small>
          </div>

          <FooterColumn title="SHOP" links={[
            { label: "Nuts", href: "/products" },
            { label: "Spices", href: "/products" },
            { label: "Dried fruits", href: "/products" },
            { label: "Cake ingredients", href: "/products" },
          ]} />

          <FooterColumn title="CUSTOMER CARE" links={[
            { label: "FAQ", href: "#faq" },
            { label: "Delivery", href: "#" },
            { label: "Returns", href: "#" },
            { label: "Track an order", href: "#" },
          ]} />

          <div>
            <h4>VISIT &amp; CONTACT</h4>
            <p>No.100, Sri Wickrama MW<br />Colombo 15</p>
            <a href="tel:0779210260">077 9210260</a>
            <a href="mailto:jayarasaenterprises@gmail.com">jayarasaenterprises@gmail.com</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Jayarasa Mix &amp; Nut. All rights reserved.</span>
          <span>Privacy · Terms · Returns policy</span>
        </div>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="service-item">
      <span className="service-icon">{icon}</span>
      <div>
        <b>{title}</b>
        <small>{text}</small>
      </div>
    </div>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="step-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Review({ text, author }) {
  return (
    <blockquote className="review-card">
      <div className="stars">★★★★★</div>
      <p>"{text}"</p>
      <cite>{author}</cite>
    </blockquote>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      {links.map(({ label, href }) =>
        href.startsWith("/") && !href.startsWith("/#") ? (
          <Link key={label} to={href}>{label}</Link>
        ) : (
          <a key={label} href={href}>{label}</a>
        )
      )}
    </div>
  );
}

export default Home;
