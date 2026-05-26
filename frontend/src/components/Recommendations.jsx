function Recommendations({ recommendations }) {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div style={styles.container}>
      <h2>Recommended Products</h2>

      <div style={styles.grid}>
        {recommendations.map((item) => (
          <div key={item.id} style={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.image}
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    width: "180px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default Recommendations;