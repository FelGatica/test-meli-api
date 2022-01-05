export default function buildMakeItem () {
    return function makeItem ({
        id,
        title,
        price,
        picture,
        condition,
        free_shipping = false
    } = {}) {
      if (!id) {
        throw new Error('Item must have an id.');
      }
      if (!title) {
        throw new Error('Item must have a title.');
      }
      if (!price) {
        throw new Error('Item must contain a price.');
      }
      if (!picture) {
        throw new Error('Item must have a picture.');
      }
      if (!condition) {
        throw new Error('Item must have a condition.');
      }
  
      return Object.freeze({
        id,
        title,
        price,
        picture,
        condition,
        free_shipping
      });
    }
  }