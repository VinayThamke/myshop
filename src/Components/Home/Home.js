import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    if (res) {
      setData(res.data);
      console.log(data);
    }
  };

  return (
    <div className="container mt-3">
      <Card data={data && data} />
    </div>
  );
};

export default Home;
