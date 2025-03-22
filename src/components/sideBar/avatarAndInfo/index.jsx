import React from "react";
import styles from "./index.module.css";
import { Progress, Avatar } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import background from "../../../assets/images/background.jpg";
import avatarPhoto from "../../../assets/icons/avatarPhoto.jpeg";

const AvatarAndInfo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundContainer}>
        <img
          className={styles.backgroundImage}
          src={background}
          alt="Background"
        />
        <div className={styles.avatarWrapper}>
          <Avatar className={styles.avatar} size={110} src={avatarPhoto} />
          <div className={styles.nameWrapper}>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <span className={styles.name}>John Doe</span>
          </div>
        </div>
      </div>
      <div className={styles.progressWrapper}>
        <span className={styles.textOfProgress}>
          Your profile is almost complete!
        </span>
        <Progress className={styles.progressBar} percent={80} status="active" />
      </div>
    </div>
  );
};

export default AvatarAndInfo;
