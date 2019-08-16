import React from 'react'; // eslint-disable-line
import types from 'prop-types';
import { LoaderWrapper } from './styles';

const Loader = props => (
  <LoaderWrapper {...props}>
    <span />
    <span />
    <span />
  </LoaderWrapper>
);

Loader.defaultProps = {
  color: 'lightBlue',
  size: 'normal',
  position: 'center',
};

Loader.propTypes = {
  position: types.oneOf(['left', 'center', 'right']),
  style: types.object,
  color: types.string,
  size: types.oneOf(['small', 'normal', 'big']),
};

export default Loader;
