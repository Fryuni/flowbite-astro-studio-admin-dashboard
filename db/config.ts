import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		email: column.text({ unique: true }),
		salt: column.text(),
		passwordHash: column.text(),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: { Users },
});
