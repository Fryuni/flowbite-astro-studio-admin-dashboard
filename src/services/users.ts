import type { Users } from '../types/entities.js';

import usersStaticJSON from '../../data/users.json' assert { type: 'json' };

const usersStaticData: Users = usersStaticJSON;

export function getUsers(_randomize = true) {
	console.log('getUsers');

	const result = usersStaticData;

	return result;
}
