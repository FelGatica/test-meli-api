import {makeItem, makePrice} from '../domain/index.js';
import {makeItemResponseView} from './views/index.js'; 

export default function makeFindItem ({ findAdapter, findDescAdapter }) {
    return async function findItem ({ id } = {}) {
      if (!id) {
        throw new Error('You must supply an Id.');
      }

      const item = await findAdapter(id);

      if (!item) {
        throw new Error('Not found item');
      }

      const itemDesc = await findDescAdapter(id);

      const priceOut = makePrice({ 
        currency: item.currency_id, 
        amount: item.price, 
        decimals: 2 });

      const itemOut = makeItem({ 
        id: item.id, 
        title: item.title,
        price: priceOut,
        picture: item.thumbnail, 
        condition: item.condition, 
        free_shipping: item.shipping?.free_shipping});

      return makeItemResponseView({item: itemOut, description: itemDesc.plain_text});
    }
};