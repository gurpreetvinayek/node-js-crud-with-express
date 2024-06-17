// Function to send a success response
const sendSuccessResponse = (res, data = {}, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        data
    });
};

// Function to send an error response
const sendErrorResponse = (res, message = 'Internal Server Error', statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        error: {
            message
        }
    });
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
};