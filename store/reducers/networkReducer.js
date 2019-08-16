const initialState = {};

const networkReducer = (state = initialState, action) => {
  switch (true) {
    case /REQUEST$/.test(action.type): {
      return {
        ...state,
        [action.type]: 'loading',
      };
    }

    case /SUCCESS$/.test(action.type): {
      const newState = {};
      const keys = Object.keys(state);

      keys.forEach(processKey => {
        if (
          processKey.slice(0, processKey.lastIndexOf('_REQUEST')) !==
          action.type.slice(0, action.type.lastIndexOf('_SUCCESS'))
        ) {
          newState[processKey] = state[processKey];
        }
      });

      return newState;
    }

    case /FAIL$/.test(action.type): {
      const newState = {};
      const keys = Object.keys(state);

      keys.forEach(processKey => {
        if (
          processKey.slice(0, processKey.lastIndexOf('_REQUEST')) ===
          action.type.slice(0, action.type.lastIndexOf('_FAIL'))
        ) {
          newState[processKey] = { error: action.error };
        }
      });

      return newState;
    }

    default:
      return state;
  }
};

export default networkReducer;
