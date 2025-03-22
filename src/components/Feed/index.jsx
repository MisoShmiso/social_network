import React from "react";
import styles from "./index.module.css";
import Posts from "./posts";
import InputForPost from "./inputForPost";
import Filter from "./FIlter";
import { useStore } from "../../models/StoreContext";

// Оборачиваем компонент в observer, чтобы он реагировал на изменения в store
const Feed = () => {
  // Получаем store через хук
  // Используем view из store для получения отсортированных постов

  return (
    <div className={styles.root}>
      <InputForPost />
      <Filter />
      <Posts />
    </div>
  );
};

export default Feed;
