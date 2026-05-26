import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>

      {/* CLICKABLE PRODUCT */}

      <Link
        to={`/product/${product.id}`}
        style={styles.link}
      >

        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />

        <div style={styles.content}>

          <h3>{product.name}</h3>

          <p style={styles.price}>
            ₹{product.price}
          </p>

        </div>

      </Link>

      {/* ADD TO CART BUTTON */}

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

const styles = {

  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow:
      "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },

  content: {
    padding: "20px",
    textAlign: "center",
  },

  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#b12704",
  },

  buttonContainer: {
    padding: "0 20px 20px",
  },

  button: {
    backgroundColor: "#ffd814",
    border: "none",
    padding: "12px 20px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    fontSize: "16px",
  },
};

export default ProductCard;