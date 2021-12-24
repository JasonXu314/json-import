export class JSONError extends Error {
	private readonly TYPE = 'JSON_ERROR';

	constructor(message?: string) {
		super(message);
	}

	[Symbol.hasInstance](obj: unknown) {
		return obj instanceof Error && 'TYPE' in obj && (obj as JSONError).TYPE === 'JSON_ERROR';
	}
}
