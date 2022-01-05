import buildMakeItem from './Item.js';
import buildMakePrice from './Price.js';

const makeItem = buildMakeItem();
const makePrice = buildMakePrice();

const itemDomain = Object.freeze({
    makeItem,
    makePrice
});

export default itemDomain;
export { makeItem, makePrice };