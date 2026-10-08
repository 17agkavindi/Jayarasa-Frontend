import React, { useState } from "react";
import {
  Search,
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
  ChevronDown
} from "lucide-react";

const categories = [
  {
    title: "Nuts",
    text: "Cashews, almonds, peanuts & more",
    image:
      "/images/nuts.png",
  },
  {
    title: "Spices",
    text: "Everyday aroma for every kitchen",
    image:
      "/images/spices.png",
  },
  {
    title: "Dried Fruits",
    text: "Naturally sweet pantry staples",
    image:
      "/images/dryfruits.png",
  },
  {
    title: "Cake Essentials",
    text: "For bakers, makers & celebrations",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Spicy Roasted Cashews",
    category: "NUTS · BESTSELLER",
    price: "Rs. 620",
    stock: "In stock",
    image:
      "/images/devilledcashew.png",
  },
  {
    id: 2,
    name: "Raw Almonds",
    category: "NUTS",
    price: "Rs. 740",
    stock: "In stock",
    image:
      "/images/almonds.png",
  },
  {
    id: 3,
    name: "Green Pistachios",
    category: "NUTS",
    price: "Rs. 890",
    stock: "Only 8 packs left",
    image:
      "/images/pistachios.png",
  },
  {
    id: 4,
    name: "Seedless Raisins",
    category: "DRIED FRUITS",
    price: "Rs. 380",
    stock: "In stock",
    image:
      "/images/dryfruits.png",
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    // FRONTEND ONLY:
    
    setCartCount((count) => count + 1);
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(""), 2200);
  };

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id]
    );
  };

  return (
    <div className="app">
      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>🇱🇰 Packed fresh in Sri Lanka</span>
          <div className="top-links">
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <span className="brand-mark">JE</span>
            <span>
              <strong>Jayarasa</strong>
              <small>Mix & Nut</small>
            </span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop all</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>Nuts</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>Spices</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>Dried fruits</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>Cake ingredients</a>
            <a href="#bulk" onClick={() => setMenuOpen(false)}>Bulk & shop orders</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>Help</a>
          </nav>

          <div className="nav-actions">
            <button type="button">
              <UserRound size={14} /> Account
            </button>
            <button type="button" className="cart-button">
              <ShoppingCart size={14} /> Cart ({cartCount})
            </button>
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
                <a href="#shop" className="btn primary-btn">
                  Shop favourites <ArrowRight size={13} />
                </a>
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
            <img
              src="/images/main.jpg"
              alt="Jayarasa nuts and pantry products"
            />

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
                <a href="#shop" className="category-card" key={category.title}>
                  <img src={category.image} alt={category.title} />
                  <div className="image-gradient" />
                  <div className="category-content">
                    <span>SHOP CATEGORY</span>
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>
                </a>
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
              <button className="outline-btn">
                View all products <ArrowRight size={12} />
              </button>
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
                    from <strong>{product.price}</strong>
                  </p>

                  <button
                    className="add-cart"
                    onClick={() => addToCart(product)}
                  >
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
              <img
                src="/images/pantryview.png"
                alt="Jayarasa pantry packs"
              />
            </div>

            <div className="pack-copy">
              <p className="eyebrow">A size for every pantry</p>
              <h2>
                Taste a little.
                <br />
                Stock up a lot.
              </h2>
              <p>
                Start with a 50g pack, refill the family pantry with 500g,
                or choose value-friendly 1kg packs for cafés, bakeries and
                neighbourhood shops.
              </p>

              <div className="size-pills">
                <button>50g</button>
                <button className="active">100g</button>
                <button>500g</button>
                <button>1kg</button>
              </div>

              <a href="#shop" className="btn primary-btn">
                Browse all package sizes <ArrowRight size={13} />
              </a>
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
                Mix favourites in one order. Simple islandwide delivery and
                cash on delivery available.
              </span>
              <a href="#shop">Home shopping →</a>
            </div>

            <div className="bulk-card">
              <p>FOR YOUR SHOP</p>
              <h3>Reliable bulk supply</h3>
              <span>
                Order practical 500g and 1kg packs with consistent quality and
                a clear order history.
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
              <Review text="The cashews arrive crisp every time. The 500g packs are perfect for our café." author="Amalika · Café owner, Kandy" />
              <Review text="Great pack sizes and quick WhatsApp support made my first order so easy." author="Shanali · Home baker, Matara" />
              <Review text="I could track the parcel from processing to dispatch. Excellent care." author="Fazil · Galle" />
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
              <h2>Fresh arrivals, pantry notes & offers</h2>
              <p>One thoughtful email and no clutter.</p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Newsletter form is ready to connect to your backend.");
              }}
            >
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
            <a className="brand footer-brand" href="#">
              <span className="brand-mark">JE</span>
              <span>
                <strong>Jayarasa</strong>
                <small>Mix & Nut</small>
              </span>
            </a>
            <p>
              Premium pantry essentials packed fresh in Sri Lanka for homes,
              bakeries and neighbourhood shops.
            </p>
            <small>Reg No.: W47907</small>
          </div>

          <FooterColumn
            title="SHOP"
            links={["Nuts", "Spices", "Dried fruits", "Cake ingredients"]}
          />

          <FooterColumn
            title="CUSTOMER CARE"
            links={["FAQ", "Delivery", "Returns", "Track an order"]}
          />

          <div>
            <h4>VISIT & CONTACT</h4>
            <p>No.100,Sri Wickrama MW<br />Colombo 15,</p>
            <a href="tel:0779210260">077 9210260</a>
            <a href="mailto:jayarasaenterprises@gmail.com">jayarasaenterprises@gmail.com</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Jayarasa Mix & Nut. All rights reserved.</span>
          <span>Privacy · Terms · Returns policy</span>
        </div>
      </footer>

      {toast && <div className="toast">{toast} ✓</div>}
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
      <p>“{text}”</p>
      <cite>{author}</cite>
    </blockquote>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      {links.map((link) => (
        <a href="#shop" key={link}>{link}</a>
      ))}
    </div>
  );
}

export default App;
