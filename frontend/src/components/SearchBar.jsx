function SearchBar({ search, setSearch }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
};

export default SearchBar;