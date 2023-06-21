import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, setProducts } from "../../features/api/ProductSlice";

const Home = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    if (res) {
      setData(res.data);
      dispatch(setProducts(res.data));
    }
  };

  return (
    <div className="container mt-3" style={{ minHeight: "86.8vh" }}>
      <Card />
    </div>
  );
};

export default Home;
