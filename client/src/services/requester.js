const requester = async (method, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "content-type": "applicaiton/json",
      };
      options.body = JSON.stringify(data);
    }
  }

  const serializedAuth = localStorage.getItem("auth");

  let newToken;
  if (serializedAuth) {
    const auth = JSON.parse(serializedAuth);
    newToken = auth.accessToken;
  }

  if (newToken) {
    options.headers = {
      ...options.headers,
      "X-Authorization": newToken,
    };
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const requestFactory = () => {
  return {
    get: requester.bind(null, "GET"),
    post: requester.bind(null, "POST"),
    put: requester.bind(null, "PUT"),
    patch: requester.bind(null, "PATCH"),
    delete: requester.bind(null, "DELETE"),
  };
};
