import { defineMiddleware } from "astro:middleware";
import { sign, verify, createSecretKey } from 'node:crypto';

const key = createSecretKey(import.meta.env.SECRET_KEY ?? 'not so secret');

const cookieOptions = {
	httpOnly: true,
	sameSite: 'lax',
	domain: new URL(import.meta.env.SITE).hostname,
	path: '/',
	// 1 hour
	maxAge: 60 * 60 * 1,
} as const;

export const onRequest = defineMiddleware(async (context, next) => {
	const session = context.cookies.get('session');

	context.locals.user = session
		? {
			id: session.value.split(':')[0]!,
			signOut: () => {
				context.cookies.set('session', '', { ...cookieOptions, maxAge: 0 });
			}
		}
		: {
			id: null,
			signIn: (user: string) => {
				const signature = sign('sha256', Buffer.from(user), key)

				context.cookies.set('session', `${user}:${signature.toString('hex')}`, cookieOptions);
			}
		}

	return next();
});

