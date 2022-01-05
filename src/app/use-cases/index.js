import makeListItems from './list-items.js';
import makeFindItem from './find-item.js';
import { searchAdapter,
        findAdapter,
        findDescAdapter } from '../data-access/index.js';

const listItems = makeListItems({searchAdapter});
const findItem = makeFindItem({findAdapter, findDescAdapter});

const itemService = Object.freeze({
    listItems,
    findItem
});

export default itemService;
export { listItems, findItem };