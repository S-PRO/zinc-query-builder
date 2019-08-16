import React from 'react'; // eslint-disable-line
import { getCookie } from './cookieService';
import { redirect } from '.';

export default () => Page => {
  function unauthRouteHOC(props) {
    return <Page {...props} />;
  }

  unauthRouteHOC.getInitialProps = async ctx => {
    const token = getCookie('token', ctx.req);

    if (token) redirect('/user', ctx);

    return {};
  };

  return unauthRouteHOC;
};
