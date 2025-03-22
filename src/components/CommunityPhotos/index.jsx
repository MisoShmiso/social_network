import React from "react";
import styles from "./index.module.css";

const Photos = ({ images, index }) => {
  return (
    <div className={styles.photos}>
      {images.map((image, index) => (
        <img key={index} className={styles.image} src={image} />
      ))}
    </div>
  );
};

export default Photos;
