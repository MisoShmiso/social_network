import { urlsWithoutCards } from '../constants/constants';

export const shouldHideCards = (pathname) => {
	return urlsWithoutCards.some((url) => pathname.startsWith(url));
};
