export default function buildMakeItemResponseView () {
    return function makeItemResponseView ({
        author = { name: 'Felipe', lastname: 'Gatica'},
        item,
        description
    } = {}) {
  
      return Object.freeze({
        author,
        item: { ...item, description: description}
      });
    }
}