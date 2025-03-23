import React from "react";
import styles from "./index.module.css";
import DialogItem from "./DialogItem";
import { useStore } from "../../models/StoreContext";

const Dialogs = () => {
  const { dialogStore } = useStore();
  return (
    <div className={styles.root}>
      {dialogStore.getSortedByDate().map((dialog) => {
        return <DialogItem key={dialog.id} dialog={dialog} />;
      })}
    </div>
  );
};

export default Dialogs;
