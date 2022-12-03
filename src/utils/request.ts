import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

interface RequestParams<Payload = {}> {
  data?: Payload;
  endpoint: string;
  method?: string;
}

async function makeRequest<Payload extends object = {}>({
  endpoint,
  method,
  data,
}: RequestParams<Payload>) {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  const res = await axios({
    url: url.toString(),
    method,
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 404) {
    return undefined;
  }

  if (res.status >= 500) {
    throw new Error('A network error occurred. Please try again.')
  }

  return res.data
}

export default makeRequest;