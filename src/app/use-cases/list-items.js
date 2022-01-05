import {makeItem, makePrice} from '../domain/index.js';
import {makeListItemsResponseView} from './views/index.js'; 

export default function makeListItems ({ searchAdapter }) {
    return async function listItems ({ query, limit } = {}) {
      
      if (!query) {
        throw new Error('You must supply a query.');
      }

      const searchResult = await searchAdapter(
        query
      );

      let items = searchResult.results;

      if (limit && parseInt(limit) !== 0 && parseInt(limit) < items.length) {
        items = items.slice(0, parseInt(limit));
      }

      const finalItems = items.map(function (item) {
          const priceOut = makePrice({ 
                                    currency: item.currency_id, 
                                    amount: item.price});

          const itemOut = makeItem({ 
                                  id: item.id, 
                                  title: item.title,
                                  price: priceOut,
                                  picture: item.thumbnail, 
                                  condition: item.condition, 
                                  free_shipping: item.shipping?.free_shipping});
                          
          return itemOut;
      });

      const categoryFilter = searchResult.filters?.find(filter => filter.id === 'category');
      
      const categories = categoryFilter?
            categoryFilter.values.map(function (value) {
                return { name: value.name, breadcrumb: value.path_from_root };
              }) : null;

      return makeListItemsResponseView({items: finalItems, categories: categories});
    }
  }