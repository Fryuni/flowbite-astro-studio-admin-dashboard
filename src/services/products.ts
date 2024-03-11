import type { Products } from '../types/entities.js';

import productsStaticJSON from '../../data/products.json' assert { type: 'json' };

const productsStaticData: Products = productsStaticJSON;

export function getProducts(_randomize = false) {
	console.log('getProducts');

	const result = productsStaticData;

	return result;
}
