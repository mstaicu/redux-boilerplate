export var sayHello = function(userName) {
    return {
        type: 'SAY_HELLO',
        payload: {
            name: userName
        }
    };
};
