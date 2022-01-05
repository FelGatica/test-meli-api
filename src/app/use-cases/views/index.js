import buildMakeItemResponseView from './item-view.js';
import buildMakeListItemsResponseView from './list-items-view.js';

const makeItemResponseView = buildMakeItemResponseView();
const makeListItemsResponseView = buildMakeListItemsResponseView();

const itemView = Object.freeze({
    makeItemResponseView,
    makeListItemsResponseView
});

export default itemView;
export { makeItemResponseView, makeListItemsResponseView };