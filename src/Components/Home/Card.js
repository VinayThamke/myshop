import React from "react";
import styles from "../../styles/Home.module.scss";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="row row-cols-3">
      {data &&
        data.map((item) => {
          return (
            <div className="col">
              <div
                className="card"
                //   style={{ width: "18rem;" }}
              >
                <img
                  src={item.image}
                  className="productImage"
                  alt="Loading..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
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
