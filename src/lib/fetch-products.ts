const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const products_data = await response.json();
  return products_data.products;
};

export { fetchProducts };
