import styles from './index.module.css';
import {TeamOutlined, MailOutlined, CoffeeOutlined, TableOutlined, CameraOutlined, SoundOutlined, SettingOutlined} from '@ant-design/icons';


const menuItems = [
	{ 
		icon: <TeamOutlined className={styles.icon}/>,
		title: 'Friends',
		href: '/',
	},
	{
		icon: <MailOutlined className={styles.icon}/>,
		title: 'Messages',
		href: '/',
	},
	{
		icon: <CoffeeOutlined className={styles.icon}/>,
		title: 'News',
		href: '/',
	},
	{
		icon: <TableOutlined className={styles.icon}/>,
		title: 'Groups',
		href: '/',
	},
	{
		icon:<CameraOutlined className={styles.icon}/>,
		title: 'Photos',
		href: '/',
	},
	{
		icon:<SoundOutlined className={styles.icon}/>,
		title: 'Music',
		href: '/',
	},
	{
		icon:<SettingOutlined className={styles.icon}/>,
		title: 'Settings',
		href: '/',
	},
];

const NavMenu = () => {
	return (
		<nav className={styles.root}>
			<span className={styles.myProfile}>MY PROFILE</span>
			<div className={styles.menuItems}>
				{menuItems.map((item, index) => {
					return (
						<div key={index} className={styles.menuItem} >
							{item.icon}
							<a className={styles.link} href={item.href}>{item.title}</a>
						</div>
					);
				})}
			</div>
		</nav>
	);
};

export default NavMenu;
