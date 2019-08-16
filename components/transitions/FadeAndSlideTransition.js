import React from 'react'; // eslint-disable-line
import types from 'prop-types';
import { Transition } from 'react-transition-group';

// ----------------

const FadeAndSlideTransition = ({ children, duration, in: inProp }) => {
  const defaultStyle = {
    transition: `all ${duration}ms`,
    opacity: 0,
    transform: 'translateY(10%)',
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: 'translateY(10%)',
    },
    entered: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    exiting: {
      opacity: 0,
      transform: 'translateY(10%)',
    },
  };
  return (
    <Transition
      in={inProp}
      appear={true}
      timeout={{
        enter: 0,
        exit: 0,
      }}
    >
      {status => {
        if (status === 'exited') {
          return null;
        }
        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, currentStyles),
        });
      }}
    </Transition>
  );
};

// Type of props

FadeAndSlideTransition.defaultProps = {
  duration: 300,
};

FadeAndSlideTransition.propTypes = {
  style: types.object,
};

export default FadeAndSlideTransition;
