function Cart({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div style={styles.cart}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={styles.item}>
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

const styles = {
  cart: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
};

export default Cart;