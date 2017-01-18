module.exports = (Franz) => {
  class Schoolhub extends Franz {
    validateServer(URL) {
      const api = `${URL}/api/info`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (typeof(resp) === 'object' && 'build' in resp) {
            resolve();
          } else {
            reject();
          }
        }).fail(reject);
      });
    }
  }

  return Schoolhub;
};
