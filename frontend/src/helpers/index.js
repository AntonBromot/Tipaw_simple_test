import {URL} from "../constants";

export const callApi = async ({ route='', identificator='', data, params={} }) => {
  const url =  `${ URL }${ route }${ identificator }`,
        body = { ...params, ...(data && { body: JSON.stringify(data) })};

  let result;
  try {
    result = await fetch(url, body);
    result = await result.json();

    if (result.error) throw result.error;
  } catch(err) {
    throw new Error(err)
  }

  return result
};
