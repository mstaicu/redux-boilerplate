export var ERROR_TIME = 'ERROR_TIME';

export var getNiceError = function() {
  return {
    type: ERROR_TIME,
    payload: {},
  };
};
