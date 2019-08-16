import Router from 'next/router';

export const getContext = () =>
  process.browser ? window.ctx || window.__NEXT_DATA__ : global.ctx; // eslint-disable-line

export const redirect = (target, ctx = {}) => {
  if (ctx.res) {
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    Router.replace(target);
  }
};
