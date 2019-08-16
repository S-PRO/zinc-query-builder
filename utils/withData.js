import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { getUser } from '../store/actions/userActions';

export default (mapStateToProps, mapDispatchToProps) => Page => {
  function withDataHOC(props) {
    return <Page {...props} />;
  }

  withDataHOC.getInitialProps = async ctx => {
    if (ctx.isServer) {
      global.ctx = ctx;
    } else {
      window.ctx = ctx; // eslint-disable-line
    }

    if (!ctx.store.getState().user.profile) {
      ctx.store.dispatch(getUser(ctx.req));
    }

    if (Page.getInitialProps) return await Page.getInitialProps(ctx); // eslint-disable-line
    return {};
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withDataHOC);
};
