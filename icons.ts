import {addIcon, Plugin} from "obsidian"

export const icons = {
	lock: `
<svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill-rule="evenodd">
        <path fill="currentColor" d="M16,21.9146472 L16,24.5089948 C16,24.7801695 16.2319336,25 16.5,25 C16.7761424,25 17,24.7721195 17,24.5089948 L17,21.9146472 C17.5825962,21.708729 18,21.1531095 18,20.5 C18,19.6715728 17.3284272,19 16.5,19 C15.6715728,19 15,19.6715728 15,20.5 C15,21.1531095 15.4174038,21.708729 16,21.9146472 L16,21.9146472 L16,21.9146472 Z M15,22.5001831 L15,24.4983244 C15,25.3276769 15.6657972,26 16.5,26 C17.3284271,26 18,25.3288106 18,24.4983244 L18,22.5001831 C18.6072234,22.04408 19,21.317909 19,20.5 C19,19.1192881 17.8807119,18 16.5,18 C15.1192881,18 14,19.1192881 14,20.5 C14,21.317909 14.3927766,22.04408 15,22.5001831 L15,22.5001831 L15,22.5001831 Z M9,14.0000125 L9,10.499235 C9,6.35670485 12.3578644,3 16.5,3 C20.6337072,3 24,6.35752188 24,10.499235 L24,14.0000125 C25.6591471,14.0047488 27,15.3503174 27,17.0094776 L27,26.9905224 C27,28.6633689 25.6529197,30 23.991212,30 L9.00878799,30 C7.34559019,30 6,28.652611 6,26.9905224 L6,17.0094776 C6,15.339581 7.34233349,14.0047152 9,14.0000125 L9,14.0000125 L9,14.0000125 Z M10,14 L10,10.4934269 C10,6.90817171 12.9101491,4 16.5,4 C20.0825462,4 23,6.90720623 23,10.4934269 L23,14 L22,14 L22,10.5090731 C22,7.46649603 19.5313853,5 16.5,5 C13.4624339,5 11,7.46140289 11,10.5090731 L11,14 L10,14 L10,14 Z M12,14 L12,10.5008537 C12,8.0092478 14.0147186,6 16.5,6 C18.9802243,6 21,8.01510082 21,10.5008537 L21,14 L12,14 L12,14 L12,14 Z M8.99742191,15 C7.89427625,15 7,15.8970601 7,17.0058587 L7,26.9941413 C7,28.1019465 7.89092539,29 8.99742191,29 L24.0025781,29 C25.1057238,29 26,28.1029399 26,26.9941413 L26,17.0058587 C26,15.8980535 25.1090746,15 24.0025781,15 L8.99742191,15 L8.99742191,15 Z"/>
    </g>
</svg>`,
	unlock: `
<svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill-rule="evenodd">
        <path fill="currentColor" d="M21,23.9146472 L21,26.5089948 C21,26.7801695 21.2319336,27 21.5,27 C21.7761424,27 22,26.7721195 22,26.5089948 L22,23.9146472 C22.5825962,23.708729 23,23.1531095 23,22.5 C23,21.6715728 22.3284272,21 21.5,21 C20.6715728,21 20,21.6715728 20,22.5 C20,23.1531095 20.4174038,23.708729 21,23.9146472 L21,23.9146472 L21,23.9146472 Z M20,24.5001831 L20,26.4983244 C20,27.3276769 20.6657972,28 21.5,28 C22.3284271,28 23,27.3288106 23,26.4983244 L23,24.5001831 C23.6072234,24.04408 24,23.317909 24,22.5 C24,21.1192881 22.8807119,20 21.5,20 C20.1192881,20 19,21.1192881 19,22.5 C19,23.317909 19.3927766,24.04408 20,24.5001831 L20,24.5001831 L20,24.5001831 Z M17,16 L17,8.499235 C17,4.35752188 13.6337072,1 9.5,1 C5.35786438,1 2,4.35670485 2,8.499235 L2,9.5 L2,9.5 L2,12.4998351 C2,13.3283533 2.66579723,14 3.5,14 C4.32842712,14 5,13.3256778 5,12.4998351 L5,9.5 L5,8.49991749 C5,6.01688111 7.01471863,4 9.5,4 C11.9802243,4 14,6.01468168 14,8.49991749 L14,16.0000125 C12.3423335,16.0047152 11,17.339581 11,19.0094776 L11,28.9905224 C11,30.652611 12.3455902,32 14.008788,32 L28.991212,32 C30.6529197,32 32,30.6633689 32,28.9905224 L32,19.0094776 C32,17.347389 30.6544098,16 28.991212,16 L17,16 L17,16 Z M16,8.50071609 C16,4.91046973 13.0825462,2 9.5,2 C5.91014913,2 3,4.91996002 3,8.50071609 L3,12.501307 C3,12.7767276 3.23193359,13 3.5,13 L3.5,13 C3.77614237,13 4,12.7827428 4,12.5007386 L4,8.49558723 C4,5.46443971 6.46243388,3 9.5,3 C12.5313853,3 15,5.46045821 15,8.49558723 L15,16 L16,16 L16,8.50071609 L16,8.50071609 Z M13.9974219,17 C12.8942762,17 12,17.8970601 12,19.0058587 L12,28.9941413 C12,30.1019465 12.8909254,31 13.9974219,31 L29.0025781,31 C30.1057238,31 31,30.1029399 31,28.9941413 L31,19.0058587 C31,17.8980535 30.1090746,17 29.0025781,17 L13.9974219,17 L13.9974219,17 Z"></path>
    </g>
</svg>`
}

let isLoaded = false;
let currentIcon: HTMLElement | undefined = undefined;

export const loadIcons = (): void => {
	Object.entries(icons).forEach(([key, icon]) => addIcon(key, icon));
}

export const changeIcon = (icon: keyof typeof icons, title: string, plugin: Plugin, callback: () => void): void => {
	if (!isLoaded) {
		loadIcons();
		isLoaded = true;
	}

	if (currentIcon !== undefined) {
		currentIcon.remove();
	}

	currentIcon = plugin.addRibbonIcon(icon, title, callback);
}

export const removeIcon = (): void => {
	if (currentIcon === undefined) {
		return;
	}

	currentIcon.remove();
}
