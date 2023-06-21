import React from "react";
import styles from "../../styles/Details.module.scss";

const Details = ({ setSelected }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.closeButton} onClick={() => setSelected(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default Details;
