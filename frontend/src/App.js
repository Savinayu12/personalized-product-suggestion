import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Recommendations from "./components/Recommendations";
import SearchBar from "./components/SearchBar";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://buynest-backend-qq2x.onrender.com/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const recommendationMap = {
  "Tea Bag": ["Sugar", "Milk", "Biscuits"],
  "Coffee Powder": ["Sugar", "Milk", "Biscuits"],
  "Bread": ["Butter", "Jam", "Cheese"],
  "Rice 1KG": ["Wheat Flour", "Eggs"],
  "Eggs": ["Bread", "Butter", "Cheese"],
  "Milk": ["Coffee Powder", "Tea Bag", "Biscuits"],
  "Butter": ["Bread", "Jam"],
  "Jam": ["Bread", "Butter"],
  "Cheese": ["Bread", "Butter"],
  "Biscuits": ["Tea Bag", "Coffee Powder", "Milk"],
  "Sugar": ["Tea Bag", "Coffee Powder"],
  "Wheat Flour": ["Eggs", "Butter"],
};

  const addToCart = (product) => {
    setCart([...cart, product]);

    const suggestedNames = recommendationMap[product.name] || [];

    const suggestedProducts = products.filter((item) =>
      suggestedNames.includes(item.name)
    );

    setRecommendations(suggestedProducts);
  };

  return (
    <BrowserRouter>
      <div style={styles.app}>
        <div style={styles.navbar}>
          <Link to="/" style={styles.logoLink}>
            <h2 style={styles.logo}>BuyNest</h2>
          </Link>

          <div style={styles.searchContainer}>
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <div style={styles.cartContainer}>
            <span style={styles.cartCount}>{cart.length}</span>
            <span style={styles.cartText}>🛒 Cart</span>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={styles.hero}>
                  <h1 style={styles.heroTitle}>
                    Welcome to BuyNest
                  </h1>

                  <p style={styles.heroText}>
                    Smart product recommendations powered by AI
                  </p>
                </div>

                <div style={styles.content}>
                  <Cart cart={cart} />

                  <Recommendations
                    recommendations={recommendations}
                  />

                  <h2 style={styles.sectionTitle}>Products</h2>

                  <div style={styles.grid}>
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                      />
                    ))}
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetails
                products={products}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    backgroundColor: "#eaeded",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    backgroundColor: "#131921",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },

  logoLink: {
    textDecoration: "none",
  },

  logo: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold",
    color: "#febd69",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
  },

  searchContainer: {
    flex: 1,
  },

  cartContainer: {
    position: "relative",
    backgroundColor: "#febd69",
    padding: "12px 18px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cartCount: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
  },

  cartText: {
    fontSize: "18px",
    color: "black",
  },

  hero: {
    background: "linear-gradient(to right, #232f3e, #37475a)",
    color: "white",
    padding: "80px 30px",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "15px",
  },

  heroText: {
    fontSize: "22px",
    opacity: 0.9,
  },

  content: {
    padding: "20px",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#111",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
};

export default App;