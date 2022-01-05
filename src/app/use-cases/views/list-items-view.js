export default function buildMakeListItemsResponseView () {
    return function makeListItemsResponseView ({
        author = { name: 'Felipe', lastname: 'Gatica'},
        categories,
        items
    } = {}) {
  
      return Object.freeze({
        author,
        categories,
        items
      });
    }
}