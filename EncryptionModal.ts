import {App, Modal, Notice, TFile} from "obsidian"
import {removeIcon} from "./icons"
const crypto = require('crypto');

export class EncryptionModal extends Modal {
	private currentFile: TFile;
	private type: 'encrypt' | 'decrypt';

	constructor(app: App, currentFile: TFile, type: 'encrypt' | 'decrypt') {
		super(app);

		this.currentFile = currentFile;
		this.type = type;
	}

	async toggle(secretKey: string) {
		const { type, currentFile } = this;

		try {
			const algorithm = "aes-256-ctr"
			if (type === 'decrypt') {
				const fileContent = await this.app.vault.cachedRead(currentFile);
				const json = JSON.parse(fileContent);
				const iv: string = json.iv;
				const content: string = json.content;
				const previous: string = json.previous;
				const hash: string = json.hash;

				const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));

				const decrypted = Buffer.concat([decipher.update(Buffer.from(content, 'hex')), decipher.final()]);

				const data = decrypted.toString();

				const dataHash = crypto.createHash('md5').update(data).digest('hex');

				if (hash !== dataHash) {
					new Notice(`Invalid passphrase: ${hash} vs ${dataHash}`);
					return;
				}

				await this.app.vault.create(`${previous}/${currentFile.name}`, data)
				await this.app.vault.delete(currentFile);

				removeIcon();
			} else {
				const fileContent = await this.app.vault.cachedRead(currentFile)
				const iv = crypto.randomBytes(16)

				const cipher = crypto.createCipheriv(algorithm, secretKey, iv)

				const encrypted = Buffer.concat([cipher.update(fileContent), cipher.final()]);
				const encryptedString = encrypted.toString("hex");
				const hash = crypto.createHash('md5').update(fileContent).digest('hex');

				const data = {
					iv: iv.toString("hex"),
					content: encryptedString,
					previous: currentFile.parent.path,
					hash,
				}

				try {
					await this.app.vault.createFolder('encrypted');
				} catch (err) {
					// folder already exists
				}

				const path = `encrypted/${currentFile.name}`;

				await this.app.vault.create(path, JSON.stringify(data))
				await this.app.vault.delete(currentFile, true);

				removeIcon();
			}

			// new Notice(currentFile.basename);
		} catch (err) {
			new Notice(err);
		}
	}

	onOpen() {
		let {contentEl} = this;
		const input = contentEl.ownerDocument.createElement('input');
		input.id = 'encryption-passphrase';
		input.placeholder = 'Enter the passphrase...';
		input.type = 'password';

		const button = contentEl.ownerDocument.createElement('button');
		button.id = 'encryption-button';
		button.innerText = 'OK';

		const listener = async () => {
			const key = '0'.repeat(32 - input.value.length) + input.value;
			await this.toggle(key);
			this.close();
		}

		button.addEventListener('click', () => listener());
		input.addEventListener('keyup', (e) => {
			if (e.key === 'Enter') {
				listener().catch((err) => console.error(err));
			}
		})

		contentEl.appendChild(input);
		contentEl.appendChild(button);

		input.focus();
	}

	onClose() {
		let {contentEl} = this;
		contentEl.empty();
	}
}
