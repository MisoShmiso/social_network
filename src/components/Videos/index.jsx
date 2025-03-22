import React from "react";
import styles from "./index.module.css";
import { Image } from "antd";
import ReactPlayer from "react-player";
import { EyeOutlined } from "@ant-design/icons";

const Videos = ({ videos }) => {
  return (
    <div className={styles.videos}>
      {videos.map((video, index) => {
        return (
          <Image
            key={index}
            height={84}
            rootClassName={styles.video}
            preview={{
              destroyOnClose: true,
              // mask: false,
              imageRender: () => (
                <ReactPlayer
                  width={"60%"}
                  height={"60%"}
                  url={video.videoUrl}
                />
              ),
              toolbarRender: () => null,
            }}
            src={video.image}
          ></Image>
        );
      })}
    </div>
  );
};

export default Videos;
