import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  const baseUrl = "http://localhost:8000/api/products";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = baseUrl;
        if(selectedCategory) {
          url += `?category=${selectedCategory}`
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Products</h1>
      <p>
        Link to product database.
      </p>

      <Link to="/createbook">+ Add New Product</Link>

      <h2>Product</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}


      <div className="filters">
        <label>Categories</label>
        <select onChange={(e)=> setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="clotjhing">Clothing</option>
          <option value="equipment">Equipment</option>
          <option value="collection">Collection</option>
          <option value="other">Other</option>
        </select>
      </div>



      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="products">
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/products/${item.slug}`}>
                <img
                  src={`http://localhost:8000/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Product;
