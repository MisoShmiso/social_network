import { observer } from 'mobx-react-lite';
import { Avatar, Divider } from 'antd';
import styles from './index.module.css';
import BackButton from '../../../components/BackButton';
import { useStore } from '../../../models/StoreContext';

const Header = observer(({ id }) => {
	const { dialogStore } = useStore();
	const targetDialog = dialogStore.getDialogById(Number(id));
	return (
		<div className={styles.header}>
			<div className={styles.headerTitleBlock}>
				<BackButton />
				<Avatar
					size={80}
					src={targetDialog.image}
				/>
				<span className={styles.name}>{targetDialog.name}</span>
			</div>
			<Divider className={styles.divider} />
		</div>
	);
});

export default Header;
