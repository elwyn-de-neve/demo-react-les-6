import axios from "axios";

function ProductOverview() {
  async function fetchProduct() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <button onClick={fetchProduct} type="button">
        Fetch All Products
      </button>
    </>
  );
}

export default ProductOverview;
