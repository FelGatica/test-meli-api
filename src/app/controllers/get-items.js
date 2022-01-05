export default function makeGetItems ({ listItems: listItems }) {
    return async function getItems (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const searchItems = await listItems({
          query: httpRequest.query.q,
          limit: httpRequest.query.limit
        })
        return {
          headers,
          statusCode: 200,
          body: searchItems
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        };
      }
    }
  }