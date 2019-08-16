import cookie from 'js-cookie';

export const getCookie = (name, req) => {
  if (req && req.cookies) {
    console.log('___COOKIES', name, req.cookies[name]);
    return req.cookies[name];
  }
  return cookie.getJSON(name);
};

export const setCookie = (name, value) => {
  if (!process.browser) return;

  cookie.set(name, `${value}`);
};

export const clearCookie = name => {
  if (!process.browser) return;
  if (Array.isArray(name)) {
    name.map(item => cookie.remove(item, { path: '/' }));
  } else {
    cookie.remove(name, { path: '/' });
  }
};
