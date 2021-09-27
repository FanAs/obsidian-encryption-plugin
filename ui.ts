import {EventRef, Plugin} from "obsidian"
import {EncryptionModal} from "./EncryptionModal"
import {removeIcon, changeIcon} from "./icons"


export const createUI = (plugin: Plugin): EventRef => {
	return plugin.app.workspace.on('file-open', async (currentFile) => {
		if (currentFile.extension !== 'md') {
			removeIcon();
			return;
		}

		if (currentFile.parent.path === 'encrypted') {
			changeIcon('unlock', 'Decrypt file', plugin, () => {
				new EncryptionModal(plugin.app, currentFile, 'decrypt').open();
			});

			return;
		}

		changeIcon('lock', 'Encrypt file', plugin, () => {
			new EncryptionModal(plugin.app, currentFile, 'encrypt').open();
		})
	});
}

export const removeUI = (plugin: Plugin): void => {
	removeIcon();
}