// SNA
const logger = param => store => next =>  action => {
    console.log("logging", param);
    console.log("action", action);
    next(action);
};

export default logger;