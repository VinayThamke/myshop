import React, { useState } from "react";
import styles from "../../styles/card.module.scss";
import { getAllProducts, setProducts } from "../../features/api/ProductSlice";
import { useSelector } from "react-redux";
import Details from "../ProductDetails/Details";

const Card = () => {
  const productData = useSelector((state) => state.products.products);

  const [selected, setSelected] = useState(false);
  return (
    <div className="row row-cols-3">
      {productData ? (
        productData.map((item) => {
          return (
            <div
              className="col "
              key={item.title}
              onClick={() => setSelected(true)}
            >
              <div
                className="card d-flex align-items-center m-3"
                id={styles.card}
              >
                <img
                  src={item.image}
                  alt="Loading..."
                  className={styles.productImage}
                />
                <div className="card-body">
                  <h6 className="card-title" id={styles.cardTitle}>
                    {item.title}
                  </h6>
                  <p className="card-text" id={styles.cardText}>
                    {item.description}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
      {selected && <Details setSelected={setSelected} />}
    </div>
  );
};

export default Card;
