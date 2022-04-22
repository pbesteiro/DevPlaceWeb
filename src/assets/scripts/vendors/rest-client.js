const BASE_URL = "https://devplace-api.herokuapp.com/devplaces-campus-api/";
const token = localStorage.getItem('token')

const getConfig = async (config) => {
  const { headers, ...rest } = config;

  return {
    baseURL: BASE_URL,
    headers: {
      ...headers,
      ...(token && { authorization: `Bearer ${token}` }),
    },
    ...rest,
  };
};

let Store = {
  state: null,
  status: null,
  response: null,
  progress: 0,
}

const execute = async (method, path, body, config) => {
  const { baseURL, ...rest } = config
  const url = `${baseURL}${path}`

  return fetch(url, {
    method,
    body,
    ...rest
  })

  // const xhttp = new XMLHttpRequest();

  // if(headers.length > 0){
  //   for (const header of headers) {
  //     const key = Object.keys(header)[0]
  //     const value = header[key]
  //     xhttp.setRequestHeader(key, value)
  //   }
  // }

  // xhttp.onreadystatechange = async () => {
  //   Store.state = xhttp.readyState
  //   Store.status = xhttp.status
  //   Store.response = xhttp.response;
  // }

  // xhttp.addEventListener("progress", (event) => {
  //   if (event.lengthComputable) {
  //     var percentComplete = event.loaded / event.total * 100;
  //   } else {
  //     // Unable to compute progress information since the total size is unknown
  //   }
  // });
  
  // xhttp.addEventListener("load", (event) => {
  //   Store.state = 'load'
  // });
  
  // xhttp.addEventListener("error", (event) => {
  //   Store.state = 'error'
  // });

  // xhttp.addEventListener("abort", (event) => {
  //   Store.state = 'aborted'
  // });

  // xhttp.open(verb, url, true);
  // xhttp.send(body);

  // return xhttp
};

const Get = async ({ url, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("get", url, null, { ...defaultConfig })
};

const Post = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("post", url, body, { ...defaultConfig })
};

const Put = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("put", url, body, { ...defaultConfig });
};

const Del = async ({ url, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("del", url, null, { ...defaultConfig });
};

const Patch = async ({ url, body = {}, config = {} }) => {
  const defaultConfig = await getConfig(config);
  return execute("patch", url, body, {
    ...defaultConfig,
    ...config,
  });
};


const actions = {
  Get,
  Post,
  Put,
  Patch,
  Del,
  Store,
};
