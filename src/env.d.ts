/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type UserContext =
	| { id: null; signIn(user: string): void }
	| { id: string; signOut(): void };

declare namespace App {
	export interface Locals {
		user: UserContext
	}
}


