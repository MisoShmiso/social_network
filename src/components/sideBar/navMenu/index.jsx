import styles from "./index.module.css";
import {
  TeamOutlined,
  MailOutlined,
  CoffeeOutlined,
  TableOutlined,
  CameraOutlined,
  SoundOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    icon: <CoffeeOutlined className={styles.icon} />,
    title: "Feed",
    href: "/feed",
  },
  {
    icon: <MailOutlined className={styles.icon} />,
    title: "Messages",
    href: "/messages",
  },
  {
    icon: <TeamOutlined className={styles.icon} />,
    title: "Friends",
    href: "/friends",
  },

  {
    icon: <TableOutlined className={styles.icon} />,
    title: "Groups",
    href: "/groups",
  },
  {
    icon: <CameraOutlined className={styles.icon} />,
    title: "Photos",
    href: "/photos",
  },
  {
    icon: <SoundOutlined className={styles.icon} />,
    title: "Music",
    href: "/music",
  },
  {
    icon: <SettingOutlined className={styles.icon} />,
    title: "Settings",
    href: "/settings",
  },
];

const NavMenu = () => {
  return (
    <nav className={styles.root}>
      <span className={styles.myProfile}>MY PROFILE</span>
      <div className={styles.menuItems}>
        {menuItems.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              to={item.href}
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default NavMenu;
