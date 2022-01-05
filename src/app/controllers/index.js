import {listItems, findItem} from '../use-cases/index.js';
import makeGetItems from './get-items.js';
import makeGetItem from './get-item.js';
import notFound from './not-found.js';

const getItems = makeGetItems({listItems});
const getItem = makeGetItem({findItem})

const itemsController = Object.freeze({
    getItems,
    getItem,
    notFound
});

export default itemsController;
export {getItems, getItem, notFound};