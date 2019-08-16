import fetch from 'isomorphic-unfetch';
import es6promise from 'es6-promise';
import { getCookie } from './cookieService';
import { getContext } from '.';

es6promise.polyfill();

export default async function apiCaller(options) {
  const { url, method = 'GET', payload, apiConfig = {} } = options;
  const { withCookie, cookies } = apiConfig;
  const ctx = getContext() || {};
  const token = getCookie('token', ctx.req);
  const cnfg =
    method === 'GET'
      ? {
          method: method,
          ...(withCookie && { credentials: 'include' }),
          headers: {
            ...(token && { Authorization: `${token}` }),
          },
        }
      : {
          body: JSON.stringify(payload),
          method: method,
          'Content-Type': 'application/json',
          ...(withCookie && { credentials: 'include' }),
          headers: {
            ...(token && { Authorization: `${token}` }),
            ...(cookies && { Cookie: cookies }),
          },
        };
  try {
    const res = await fetch(`${new URL(url, 'http://localhost:3000')}`, cnfg);
    const data = await res.json();
    if (!res.ok) throw data;
    return data;
  } catch (error) {
    throw error;
  }
}
