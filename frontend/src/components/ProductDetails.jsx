import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={styles.container}>

      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.details}>

        <h1>{product.name}</h1>

        <p style={styles.price}>
          ₹{product.price}
        </p>

        <p style={styles.description}>
          High quality product with smart
          recommendations and modern
          shopping experience.
        </p>

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

  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    backgroundColor: "white",
    margin: "30px",
    borderRadius: "15px",
  },

  image: {
    width: "400px",
    borderRadius: "10px",
    objectFit: "cover",
  },

  details: {
    flex: 1,
  },

  price: {
    fontSize: "32px",
    color: "#b12704",
    fontWeight: "bold",
  },

  description: {
    fontSize: "18px",
    lineHeight: "1.6",
  },

  button: {
    backgroundColor: "#ffd814",
    border: "none",
    padding: "15px 25px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "20px",
  },
};

export default ProductDetails;