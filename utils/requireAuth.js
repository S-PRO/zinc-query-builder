import React from 'react'; // eslint-disable-line
import { getCookie } from './cookieService';
import { redirect } from '.';

export default () => Page => {
  function requireAuthHOC(props) {
    return <Page {...props} />;
  }

  requireAuthHOC.getInitialProps = async ctx => {
    console.log('requireAuthHOC.getInitialProps');
    const token = getCookie('token', ctx.req);

    if (!token) {
      redirect('/auth/login', ctx);
      return {};
    }

    if (Page.getInitialProps) return await Page.getInitialProps(ctx); // eslint-disable-line
    return {};
  };

  return requireAuthHOC;
};
