import { environment } from '../utils/config';

function apiHandler() {

  const { apiUrl } = environment;
  const publicUrl = `${apiUrl}`;

  async function commonRequest(endpoint, {
    method, body, signal, headers,
  }) {

    return new Promise((resolve, reject) => {

      let res = {};
      fetch(endpoint, {
        method,
        signal,
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => {

          res = response;
          return response.text();

        })
      // eslint-disable-next-line consistent-return
        .then((text) => {

          try {

            const data = JSON.parse(text);
            if (!res.ok) return reject(console.log('!ERROR!1'));
            resolve(data);

          } catch (error) {

            if (!res.ok) return reject(console.log('!ERROR!2'));
            resolve(console.log('!ERROR!3'));

          }

        })
        .catch((error) => {

          // eslint-disable-next-line no-console
          console.log('error ', error);
          reject(console.log('!ERROR!4'));

        });

    });

  }

  return {
    commonRequest,

    async tenantRequest(path, {
      method, formData, body, signal, headers,
    }) {

      const endpoint = `${publicUrl}${path}`;
      return commonRequest(endpoint, {
        method, formData, body, signal, headers,
      });

    },
  };

}

export default apiHandler();
