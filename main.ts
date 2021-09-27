import {EventRef, Plugin} from "obsidian"
import {createUI, removeUI} from "./ui"

interface PluginSettings {
}

const DEFAULT_SETTINGS: PluginSettings = {
}

export default class EncryptionPlugin extends Plugin {
	settings: PluginSettings;
	workspaceRefs: EventRef[] = [];

	async onload() {
		await this.loadSettings();

		this.workspaceRefs.push(createUI(this));
	}

	onunload() {
		removeUI(this);
		this.workspaceRefs.forEach((ref) => {
			this.app.workspace.offref(ref);
		});
	}

	async loadSettings() {
		this.settings = Object.assign(DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
