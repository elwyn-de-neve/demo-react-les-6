import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <button onClick={fetchProduct} type="button">
        Fetch Single Product
      </button>
    </>
  );
}

export default ProductPage;
