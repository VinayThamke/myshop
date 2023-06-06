import React from "react";
import styles from "../../styles/card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="row row-cols-3">
      {data &&
        data.map((item) => {
          return (
            <div className="col ">
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
        })}
    </div>
  );
};

export default Card;
