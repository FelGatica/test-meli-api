export default function makeFindItemDescAdapter ({ restClient, url }) {
    return async function findItemDesc (id) {
      if (!url)
        throw new Error('You must supply a url.');

      const fullUrl = url.replace(/{id}/, id);

      console.log('Call api ---> ', fullUrl);
      return await restClient.get(fullUrl)
        .then(response => {
          console.log('Response Status Call ---> ', response.status);
          return response.data;
        })
        .catch(error => {
          console.log(error);
          throw new Error('An Error happend find item --> ', error);
        });
    };
}