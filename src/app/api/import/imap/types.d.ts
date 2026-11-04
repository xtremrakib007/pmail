export type ImapImportRequest = {
	mailboxId?: string;
	host?: string;
	port?: number;
	secure?: boolean;
	username?: string;
	password?: string;
	/** Messages per batch, or the cap per folder when importAll is off. */
	limit?: number;
	importAll?: boolean;
	/** Folders to read, each with the Xmail destination it lands in. */
	sources?: { folder?: string; destination?: string }[];
};
