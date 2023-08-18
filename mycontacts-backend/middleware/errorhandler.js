const { constants } = require("../constants");
const errorhandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Not authorized",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stacktrace: err.stack
            });
            break;
        default:
            console.log("No error, All good");
            break;
    }
};

module.exports = errorhandler;