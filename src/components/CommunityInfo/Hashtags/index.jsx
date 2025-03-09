import React from 'react';
import styles from './index.module.css';
import { Tag } from 'antd';
import { tags } from './data';

const Hashtags = () => {
	const getRandomTags = () => {
		return tags.sort(() => Math.random() - 0.5);
	};
	const getRandomStyles = () => {
		const randomWidth = `${Math.floor(Math.random() * (140 - 80 + 1) + 80)}px`;
		const randomFontSize = `${Math.floor(
			Math.random() * (18 - 14 + 1) + 14
		)}px`;
		const randomHeight = `${Math.floor(Math.random() * (24 - 22 + 1) + 22)}px`;
		const randomStyles = {
			width: randomWidth,
			// fontSize: randomFontSize,
			// height: randomHeight,
		};
		return randomStyles;
	};

	return (
		<div className={styles.tagsWrapper}>
			{getRandomTags().map((tag, index) => {
				return (
					<Tag
						key={index}
						className={styles.tag}
						color={tag.color}
						style={getRandomStyles()}
					>
						{tag.value}
					</Tag>
				);
			})}
		</div>
	);
};

export default Hashtags;
