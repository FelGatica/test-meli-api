import axios from 'axios';
import dotenv from 'dotenv';
import makeSearchItemsAdapter from './search-items-adapter.js'; 
import makeFindItemAdapter from './find-item-adapter.js';
import makeFindItemDescAdapter from './find-item-desc-adapter.js';

dotenv.config();

const URL_SEARCH = process.env.URL_SEARCH_ITEMS;
const URL_FIND = process.env.URL_FIND_ITEM;
const URL_FIND_DESC = process.env.URL_FIND_ITEM_DESC;

const searchAdapter = makeSearchItemsAdapter({ restClient: axios, url: URL_SEARCH });
const findAdapter = makeFindItemAdapter({ restClient: axios, url: URL_FIND });
const findDescAdapter = makeFindItemDescAdapter({ restClient: axios, url: URL_FIND_DESC });

const restClientAdapter = Object.freeze({
    searchAdapter,
    findAdapter,
    findDescAdapter
});

export default restClientAdapter;
export { searchAdapter, findAdapter, findDescAdapter };